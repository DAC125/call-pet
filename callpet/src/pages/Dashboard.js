import React from 'react';
import {Grid} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import Navbar from '../components/Navbar';
import 'fontsource-roboto';
import '../assets/css/Dashboard.css';
import Menu from '../components/Menu';

const useStyles = makeStyles(()=>({
root:{
    flexGrow: 1,
    background: '#cdcdcd'
},
menu:{
    padding: '20px'
    
}
}));

function Dashboard(props) {
    const classes = useStyles();
    return(
        <div className = {classes.root}>
            <Grid container>
                <Grid item xs={12}>
                    <Navbar/>
                </Grid>


                <Grid container>
                    <Grid xs={2}>
                        <Menu/>
                    </Grid>

                    <Grid xs={10}>
                        <div>
                            dashboard
                        </div>
                    </Grid>
                </Grid>
            </Grid>
         
        </div>
    )
}
export default Dashboard;