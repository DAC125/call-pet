const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./dbConection");

//middleware
app.use(cors());
app.use(express.json());

//ROUTES Clientes//
app.get("/clientes",async (req, res) => {
    try {
        const allClientes = await pool.query("select * from cliente ORDER BY id ASC;");
        res.json(allClientes.rows)
    } catch (err) {
        console.error(err.message);
    }
});

app.post("/Clientes", async (req, res) => {


    try {

        console.log(req.body);
        const { nombre, primerApellido, segundoApellido, telefono, direccionEntrega, notificacion, estado } = req.body;

        if (nombre === "") throw "Parámetro de nombre de cliente vacío";
        if (primerApellido === "") throw "Parámetro de primer apellido de cliente vacío";
        if (segundoApellido === "") throw "Parámetro de segundo apellido de cliente vacío";
        if (telefono < 20000000 || telefono > 89999999) throw "Parámetro de teléfono de cliente no está en los rangos";
        if (direccionEntrega === "") throw "Parámetro de dirección entrega de cliente vacío";
        if (notificacion && !notificacion) throw "Parámetro de notificación de cliente no booleano";
        if (estado && !estado) throw "Parámetro de estado de cliente no booleano";


        const newCliente = await pool.query(
          "INSERT INTO cliente (nombre, primer_apellido, segundo_apellido, telefono, direccion_entrega, notificacion, estado) VALUES($1, $2, $3, $4, $5, $6, $7) RETURNING *",
          [ nombre, primerApellido, segundoApellido, telefono, direccionEntrega, notificacion, estado ]
        );

        res.json(newCliente);
        
    } catch (err) {
        console.log("[!] " + err);
    }
});

app.put("/clientes/:id", async (req, res) => {
  try {
    console.log(req.body);
    const { id } = req.params;
    const { nombre, primerApellido, segundoApellido, telefono, direccionEntrega, notificacion, estado } = req.body;
    const updateTodo = await pool.query(
      "UPDATE cliente SET nombre = $1, primer_apellido = $2, segundo_apellido = $3, telefono = $4, direccion_entrega = $5, notificacion = $6, estado = $7 WHERE id = $8",
      [ nombre, primerApellido, segundoApellido, telefono, direccionEntrega, notificacion, estado, id ]
    );

    res.json("Cliente fue actualizado");
  } catch (err) {
    console.error(err.message);
  }
});

app.put("/clientes/switch_client_state/:id", async (req, res) => {
  try {

    const { id } = req.params;
     const { estado } = req.body;

    const eliminarCliente = await pool.query("UPDATE cliente SET estado = $1 WHERE id = $2", 
    [estado, id]
    );
    res.json("Estado Cliente was changed!");
  } catch (err) {
    console.log(err.message);
  }
});



app.get("/dashboard/alimentoConsumo",async (req, res) => {
    try {
        const alimentoConsumo = await pool.query("select a.marca ,count(m.id_alimento) from mascota m, alimento a where m.id_alimento = a.id group by marca");
        res.json(alimentoConsumo.rows)
    } catch (err) {
        console.error(err.message);
    }
});

app.get("/dashboard/mayoriaEspecies",async (req, res) => {
    try {
        const mayoriaEspecies = await pool.query("select especie, count(especie) from mascota group by especie order by count desc limit 3");
        res.json(mayoriaEspecies.rows)
    } catch (err) {
        console.error(err.message);
    }
});

app.get("/mascotas",async (req, res) => {
    try {
        const allMascotas = await pool.query("SELECT m.id_mascota, m.nombre_mascota, m.especie, m.raza, c.nombre, a.marca FROM mascota m INNER JOIN cliente c ON m.id_cliente = c.id INNER JOIN alimento a ON m.id_alimento = a.id");
        res.json(allMascotas.rows)
        console.log(allMascotas.rows);
    } catch (err) {
        console.error(err.message);
    }
});

app.listen(5000,() =>{
    console.log(">>> Server has started on port 5000")
});