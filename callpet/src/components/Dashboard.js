  
import React from 'react';
import 'fontsource-roboto';
import '../assets/css/components/Dashboard.css';
import {Grid} from '@material-ui/core';
import LineChart from './LineChart'
import Card from './Card'

function Dashboard(props) {
    
    return (
        <Grid container className='content'>
            <Grid container >
                <Grid item className='cardsContainer' xs={3}>
                    <div>
                        <Card/>
                    </div>
                </Grid>
                <Grid item className='cardsContainer' xs={3}>
                    <div>
                        <Card/>
                    </div>
                </Grid>
                <Grid item className='cardsContainer' xs={3}>
                    <div>
                        <Card/>
                    </div>
                </Grid>
                <Grid item className='cardsContainer' xs={3}>
                    <div>
                        <Card/>
                    </div>
                </Grid>
            </Grid>
            <Grid item className='chartsContainer' xs={12}>
                <div className='chart'>
                    <LineChart/>
                </div>
            </Grid>
        </Grid>      
    );
}

export default Dashboard;