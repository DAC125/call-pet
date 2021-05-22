  
import React from 'react';
import 'fontsource-roboto';
import '../assets/css/components/Dashboard.css';
import {Grid} from '@material-ui/core';
import LineChart from './LineChart'
import BarChart from './BarChart'
import DoughnutChart from './DoughnutChart'
import Card from './Card'

function Dashboard(props) {
    
    return (
        <Grid container className='content'>
            <Grid container >
                <Grid item className='cardsContainer' xs={3}>
                    <div>
                        <Card name='test' body='Some quick example text to build on the card title and make up the bulk of the card' />
                    </div>
                </Grid>
                <Grid item className='cardsContainer' xs={3}>
                    <div>
                        <Card name='test' body='Some quick example text to build on the card title and make up the bulk of the card'/>
                    </div>
                </Grid>
                <Grid item className='cardsContainer' xs={3}>
                    <div>
                        <Card name='test' body='Some quick example text to build on the card title and make up the bulk of the card' graph={<LineChart data="/dashboard/mayoriaEspecies"  width='600' height='200'/> } />
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