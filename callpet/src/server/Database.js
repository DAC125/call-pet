const express = require('express');
const app = express();
const cors = require('cors')
const pool = require('./DBConection')

app.use(cors())
app.use(express.json())

app.post('/insertClient',async(req,res) =>{
    try {
        const {nombre,primer_apellido,segundo_apellido,telefono,direccion_entrega} = req.body;
        const newCliente = await pool.query(
            'INSERT INTO cliente (nombre,primer_apellido,segundo_apellido,telefono,direccion_entrega) VALUES($1,$2,$3,$4,$5) RETURNING *',
            [nombre,primer_apellido,segundo_apellido,telefono,direccion_entrega]);
        res.json(newCliente.rows);
    } catch (error) {
        console.log(error.message);
    }
})

app.get('/getClientes',async(req,res) => {
    try {
        const alltodos = await pool.query('select * from alimento');
        res.json(alltodos.rows)
    } catch (error) {
        console.log(error.message);
    }
})


app.listen(5000, () =>{
    console.log('blablanbla')
})

