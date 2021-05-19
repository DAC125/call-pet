import React from 'react';
import 'fontsource-roboto';
import '../assets/css/components/Dashboard.css';
import {Grid} from '@material-ui/core';
import BarChart from './BarChart'



function Dashboard(props) {
    return(
        <Grid container className='content'>
            <Grid className='charts' xs={6}>
                <div>
                    <BarChart/>
                </div>
            </Grid>
            <Grid className='charts' xs={6}>
                <div>
                    <BarChart/>
                </div>
            </Grid>
            <Grid className='charts' xs={6}>
                <div>
                    <BarChart/>
                </div>
            </Grid>
            <Grid className='charts' xs={6}>
                <div>
                    <BarChart/>
                </div>
            </Grid>
            
        </Grid>
        

    )
}
export default Dashboard;