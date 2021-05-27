  
import React from 'react';
import 'fontsource-roboto';
import '../assets/css/components/Dashboard.css';
import {Grid} from '@material-ui/core';
import LineChart from './LineChart'
import BarChart from './BarChart'
import DoughnutChart from './DoughnutChart'
import Card from './Card'
import Circle from './Circle'


function Dashboard(props) {
    
    
    return (
        <Grid container className='content'>
            <Grid container >
                <Grid item className='cardsContainer' xs={3}>
                    <div>
                        <Card name='Cantidad de clientes' body='Cantidad de clientes registrados en empresa' graph={<Circle  color='#FF7F50' data='/dashboard/cantClientes'/>} />
                    </div>
                </Grid>
                <Grid item className='cardsContainer' xs={3}>
                    <div>
                        <Card name='Cantidad de mascotas' body='Cantidad de mascotas registradas en empresa' graph={<Circle  color='#800080' data='/dashboard/cantMascotas'/>} />
                    </div>
                </Grid>
                <Grid item className='cardsContainer' xs={3}>
                    <div>
                        <Card  name='Proveedores con mayor compra' body='Proveedores que surte mas productos a la empresa' graph={<BarChart data="/dashboard/mayoriaProveedores"  width='600' height='200' title='Alimentos por proveedor'/> } />
                    </div>
                </Grid>
                <Grid item className='cardsContainer' xs={3}>
                    <div>
                        <Card name='Cantidad de especies' body='Principales especies de animales más frecuentes ' graph={<DoughnutChart data="/dashboard/mayoriaEspecies"/> }/>
                    </div>
                </Grid>
            </Grid>
            <Grid item className='chartsContainer' xs={12}>
                <div className='chart'>
                    <h5 className='title'>Consumo de alimento por mascota</h5>
                    <LineChart data="/dashboard/alimentoConsumo" width='600' height='820' title='Consumo de alimento por mascota'/>
                </div>
            </Grid>
        </Grid>      
    );
}

export default Dashboard;