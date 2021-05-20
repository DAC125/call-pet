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



app.get("/dashboard",async (req, res) => {
    try {
        const alimentoConsumo = await pool.query("select a.marca ,count(m.id_alimento) from mascota m, alimento a where m.id_alimento = a.id group by marca");
        res.json(alimentoConsumo.rows)
    } catch (err) {
        console.error(err.message);
    }
});


app.listen(5000,() =>{
    console.log("server has started on port 5000")
});