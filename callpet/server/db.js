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

app.get("/dashboard/alimentoConsumo",async (req, res) => {
    try {
        const alimentoConsumo = await pool.query("select a.marca as labels ,count(m.id_alimento) as values from mascota m, alimento a where m.id_alimento = a.id group by marca");
        res.json(alimentoConsumo.rows)
    } catch (err) {
        console.error(err.message);
    }
});

app.get("/dashboard/cantMascotas",async (req, res) => {
    try {
        const cantMascotas = await pool.query("select count(id) as values from mascota");
        res.json(cantMascotas.rows)
    } catch (err) {
        console.error(err.message);
    }
});

app.get("/dashboard/cantClientes",async (req, res) => {
    try {
        const cantClientes = await pool.query("select count(id) as values from cliente");
        res.json(cantClientes.rows)
    } catch (err) {
        console.error(err.message);
    }
});

app.get("/dashboard/mayoriaEspecies",async (req, res) => {
    try {
        const mayoriaEspecies = await pool.query("select especie as labels, count(especie) as values from mascota group by especie order by values desc limit 3");
        res.json(mayoriaEspecies.rows)
    } catch (err) {
        console.error(err.message);
    }
});

app.get("/dashboard/mayoriaProveedores",async (req, res) => {
    try {
        const mayoriaProveedores = await pool.query("select nombre as labels, count(nombre) as values from proveedor group by nombre order by values desc limit 5");
        res.json(mayoriaProveedores.rows)
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