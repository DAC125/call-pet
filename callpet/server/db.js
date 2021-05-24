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
        const allClientes = await pool.query("select * from cliente");
        res.json(allClientes.rows)
    } catch (err) {
        console.error(err.message);
    }
});

app.post("/Clientes", async (req, res) => {


    try {

        console.log(req.body);
        const { nombre, primerApellido, segundoApellido, telefono, direccionEntrega, notificacion } = req.body;

        if (nombre === "") throw "Parámetro de nombre de cliente vacío";
        if (primerApellido === "") throw "Parámetro de primer apellido de cliente vacío";
        if (segundoApellido === "") throw "Parámetro de segundo apellido de cliente vacío";
        if (telefono < 20000000 || telefono > 89999999) throw "Parámetro de teléfono de cliente vacío";
        if (direccionEntrega === "") throw "Parámetro de dirección entrega de cliente vacío";
        if (notificacion && !notificacion) throw "Parámetro de notificación de cliente vacío";


        const newCliente = await pool.query(
          "INSERT INTO cliente (nombre, primer_apellido, segundo_apellido, telefono, direccion_entrega, notificacion) VALUES($1, $2, $3, $4, $5, $6) RETURNING *",
          [ nombre, primerApellido, segundoApellido, telefono, direccionEntrega, notificacion ]
        );

        res.json(newCliente);
        
    } catch (err) {
        console.log("[!] " + err);
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
        const allMascotas = await pool.query("select * from mascota");
        res.json(allMascotas.rows)
    } catch (err) {
        console.error(err.message);
    }
});

app.listen(5000,() =>{
    console.log("server has started on port 5000")
});