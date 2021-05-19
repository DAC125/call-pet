import React from 'react';
import {Grid} from '@material-ui/core';
import Navbar from './Navbar';
import 'fontsource-roboto';
import 'fontsource-roboto';
import Menu from './Menu';
import Clientes from './Clientes';
import Dashboard from './Dashboard';
import {BrowserRouter, Switch, Route} from 'react-router-dom';



function Container(props) {
    return(
        <div >
            <Grid container>
                <Grid item xs={12}>
                    <Navbar/>
                </Grid>


                <Grid container>
                    <Grid item xs={2}>
                        <Menu/>
                    </Grid>

                    <Grid  item xs={10}>
               
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