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
        const allMascotas = await pool.query("SELECT m.id_mascota, m.nombre_mascota, m.especie, m.raza, m.id_cliente, c.nombre, a.marca, a.id_alimento FROM mascota m INNER JOIN cliente c ON m.id_cliente = c.id INNER JOIN alimento a ON m.id_alimento = a.id_alimento");
        res.json(allMascotas.rows)
        console.log(allMascotas.rows);
    } catch (err) {
        console.error(err.message);
    }
});


app.post("/Mascotas", async (req, res) => {


    try {

        console.log(req.body);
        const { nombreMascota, especie, raza, idCliente, idAlimento } = req.body;

        if (nombreMascota === "") throw "Parámetro de nombre de mascota vacío";
        if (especie === "") throw "Parámetro de especie de mascota vacío";
        if (raza === "") throw "Parámetro de raza de mascota vacío";
        if (idCliente < 0) throw "Parámetro de ID de cliente no está en los rangos";
        if (idAlimento < 0) throw "Parámetro de ID de alimento no está en los rangos";

        const newMascota = await pool.query(
          "INSERT INTO mascota (nombre_mascota, especie, raza, id_cliente, id_alimento) VALUES($1, $2, $3, $4, $5) RETURNING *",
          [ nombreMascota, especie, raza, idCliente, idAlimento ]
        );

        res.json(newMascota);
        
    } catch (err) {
        console.log("[!] " + err);
    }
});


app.put("/mascotas/:id", async (req, res) => {
  try {
    console.log(req.body);
    const { id } = req.params;
    console.log(id);
    const { nombreMascota, especie, raza, idCliente, idAlimento } = req.body;
    const updateMascota = await pool.query(
      "UPDATE mascota SET nombre_mascota = $1, especie = $2, raza = $3, id_cliente = $4, id_alimento = $5 WHERE id_mascota = $6",
      [ nombreMascota, especie, raza, idCliente, idAlimento, id ]
    );

    res.json("Mascota fue actualizada");
  } catch (err) {
    console.error(err.message);
  }
});

app.delete("/mascotas/:id", async (req, res) => {
  try {
    const { id } = req.params;
    console.log(id);
    const deleteTodo = await pool.query("DELETE FROM mascota WHERE id_mascota = $1", [
      id
    ]);
    res.json("Mascota was deleted!");
  } catch (err) {
    console.log(err.message);
  }
});




app.get("/pedidos",async (req, res) => {
    try {
        const allPedidos = await pool.query("SELECT p.id_pedido, p.fecha_compra, p.fecha_vencimiento, p.consumo_dias, p.tiempo_aviso, p.id_cliente, c.nombre FROM pedido p INNER JOIN cliente c ON p.id_cliente = c.id");
        res.json(allPedidos.rows)
        console.log(allPedidos.rows);
    } catch (err) {
        console.error(err.message);
    }
});


app.post("/Pedidos", async (req, res) => {


    try {

        console.log(req.body);
        const { fechaCompra, fechaVencimiento, consumoDias, tiempoAviso, idCliente } = req.body;

        if (fechaCompra === "") throw "Parámetro de nombre de mascota vacío";
        if (fechaVencimiento === "") throw "Parámetro de especie de mascota vacío";
        if (consumoDias < 0) throw "Parámetro de raza de mascota vacío";
        if (tiempoAviso < 0) throw "Parámetro de ID de cliente no está en los rangos";
        if (idCliente < 0) throw "Parámetro de ID de cliente no está en los rangos";

        const newPedido = await pool.query(
          "INSERT INTO pedido (fecha_compra, fecha_vencimiento, consumo_dias, tiempo_aviso, id_cliente) VALUES($1, $2, $3, $4, $5) RETURNING *",
          [ fechaCompra, fechaVencimiento, consumoDias, tiempoAviso, idCliente ]
        );

        res.json(newPedido);
        
    } catch (err) {
        console.log("[!] " + err);
    }
});

app.put("/pedidos/:id", async (req, res) => {
  try {
    console.log(req.body);
    const { id } = req.params;
    console.log(id);
    const { fechaCompra, fechaVencimiento, consumoDias, tiempoAviso, idCliente } = req.body;
    const updatePedido = await pool.query(
      "UPDATE pedido SET fecha_compra = $1, fecha_vencimiento = $2, consumo_dias = $3, tiempo_aviso = $4, id_cliente = $5 WHERE id_pedido = $6",
      [ fechaCompra, fechaVencimiento, consumoDias, tiempoAviso, idCliente, id ]
    );

    res.json("Pedido fue actualizado");
  } catch (err) {
    console.error(err.message);
  }
});

app.delete("/pedidos/:id", async (req, res) => {
  try {
    const { id } = req.params;
    console.log(id);
    const deleteTodo = await pool.query("DELETE FROM pedido WHERE id_pedido = $1", [
      id
    ]);
    res.json("Pedido was deleted!");
  } catch (err) {
    console.log(err.message);
  }
});





app.get("/alimentos",async (req, res) => {
    try {
        const allAlimentos = await pool.query("SELECT * FROM alimento ORDER BY id_alimento ASC");
        res.json(allAlimentos.rows)
        console.log(allAlimentos.rows);
    } catch (err) {
        console.error(err.message);
    }
});

app.post("/Alimentos", async (req, res) => {


    try {

        console.log(req.body);
        const { marca, presentacion, consumoDiario } = req.body;

        if (marca === "") throw "Parámetro de nombre de mascota vacío";
        if (presentacion < 1) throw "Parámetro de marca no puede ser menor o igual a 0";
        if (consumoDiario < 1) throw "Parámetro de consumo diario no puede ser menor o igual a 0";

        const newAlimento = await pool.query(
          "INSERT INTO alimento (marca, presentacion, consumo_diario) VALUES($1, $2, $3) RETURNING *",
          [ marca, presentacion, consumoDiario ]
        );

        res.json(newAlimento);
        
    } catch (err) {
        console.log("[!] " + err);
    }
});

app.put("/alimentos/:id", async (req, res) => {
  try {
    console.log(req.body);
    const { id } = req.params;
    console.log(id);
    const { marca, presentacion, consumoDiario } = req.body;
    const updateAlimento = await pool.query(
      "UPDATE alimento SET marca = $1, presentacion = $2, consumo_diario = $3 WHERE id_alimento = $4",
      [ marca, presentacion, consumoDiario, id ]
    );

    res.json("Alimento fue actualizado");
  } catch (err) {
    console.error(err.message);
  }
});

app.delete("/alimentos/:id", async (req, res) => {
  try {
    const { id } = req.params;
    console.log(id);
    const deleteTodo = await pool.query("DELETE FROM alimento WHERE id_alimento = $1", [
      id
    ]);
    res.json("Alimento was deleted!");
  } catch (err) {
    console.log(err.message);
  }
});







app.get("/proveedores",async (req, res) => {
    try {
        const allProveedores = await pool.query("SELECT p.id_proveedor, p.nombre_proveedor, p.telefono, p.correo, p.id_alimento, a.marca FROM proveedor p INNER JOIN alimento a ON p.id_alimento = a.id_alimento");
        res.json(allProveedores.rows)
        console.log(allProveedores.rows);
    } catch (err) {
        console.error(err.message);
    }
});

app.post("/Proveedores", async (req, res) => {


    try {

        console.log(req.body);
        const { nombreProveedor, telefono, correo, idAlimento } = req.body;

        if (nombreProveedor === "") throw "Parámetro de nombre de proveedor vacío";
        if (telefono < 20000000 || telefono > 89999999) throw "Parámetro de teléfono de cliente no está en los rangos";
        if (correo === "") throw "Parámetro de correo de proveedor vacío";
        if (idAlimento < 1) throw "Parámetro de id alimento no puede ser menor o igual a 0";

        const newProveedor = await pool.query(
          "INSERT INTO proveedor (nombre_proveedor, telefono, correo, id_alimento) VALUES($1, $2, $3, $4) RETURNING *",
          [ nombreProveedor, telefono, correo, idAlimento ]
        );

        res.json(newProveedor);
        
    } catch (err) {
        console.log("[!] " + err);
    }
});

app.put("/proveedores/:id", async (req, res) => {
  try {
    console.log(req.body);
    const { id } = req.params;
    console.log(id);
    const { nombreProveedor, telefono, correo, idAlimento } = req.body;
    const updateProveedor = await pool.query(
      "UPDATE proveedor SET nombre_proveedor = $1, telefono = $2, correo = $3, id_alimento = $4 WHERE id_proveedor = $5",
      [ nombreProveedor, telefono, correo, idAlimento, id ]
    );

    res.json("Proveedor fue actualizado");
  } catch (err) {
    console.error(err.message);
  }
});

app.delete("/proveedores/:id", async (req, res) => {
  try {
    const { id } = req.params;
    console.log(id);
    const deleteTodo = await pool.query("DELETE FROM proveedor WHERE id_proveedor = $1", [
      id
    ]);
    res.json("Proveedor was deleted!");
  } catch (err) {
    console.log(err.message);
  }
});


app.listen(5000,() =>{
    console.log(">>> Server has started on port 5000")
});