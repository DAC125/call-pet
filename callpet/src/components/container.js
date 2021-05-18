import React from 'react';
import {Grid} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import Navbar from './Navbar';
import 'fontsource-roboto';
import 'fontsource-roboto';
import Menu from './Menu';
import Clientes from './Clientes';
import Dashboard from './Dashboard';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

const useStyles = makeStyles(()=>({
    root:{
        flexGrow: 1
    },
    menu:{
        padding: '20px'
        
    }
}));


function Container(props) {
    const classes = useStyles();
    return(
        <div className = {classes.root}>
            <Grid container>
                <Grid item xs={12}>
                    <Navbar/>
                </Grid>


                <Grid container>
                    <Grid item xs={2}>
                        <Menu/>
                    </Grid>

                    <Grid item xs={10}>
               
                        <BrowserRouter> 
                            <Switch>
                                <Route exact path="/" component = {Dashboard}/>
                                <Route exact path="/Dashboard" component = {Dashboard}/>
                                <Route exact path="/Clientes" component = {Clientes}/>
                            </Switch>
                        </BrowserRouter>
                    
                    </Grid>
                </Grid>
            </Grid>
         
        </div>
    )
}
export default Container;