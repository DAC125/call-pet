import React from 'react';
import 'fontsource-roboto';
import '../assets/css/components/Dashboard.css';
import {Grid} from '@material-ui/core';
import BarChart from './BarChart'
const pool = require('../server/DBConection')




function Dashboard(props) {
    return(
        <Grid container className='content'>
            <Grid className='charts' xs={6}>
                <div>
                    <BarChart lista={['lista1','lista2','lista3','lista4','lista5','lista6']}/>
                </div>
            </Grid>
            <Grid className='charts' xs={6}>
                <div>
                    <BarChart lista={['lista1','lista2','lista3','lista4','lista5','lista6']}/>
                </div>
            </Grid>
            <Grid className='charts' xs={6}>
                <div>
                    <BarChart lista={['lista1','lista2','lista3','lista4','lista5','lista6']}/>
                </div>
            </Grid>
            <Grid className='charts' xs={6}>
                <div>
                    <BarChart lista={['lista1','lista2','lista3','lista4','lista5','lista6']}/>
                </div>
            </Grid>
            
        </Grid>
        

    )
}
export default Dashboard;