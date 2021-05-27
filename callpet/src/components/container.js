import React from 'react';
import {Grid} from '@material-ui/core';
import Navbar from './Navbar';
import 'fontsource-roboto';
import 'fontsource-roboto';
import Menu from './Menu';
import Clientes from './Cliente/Clientes';
import Dashboard from './Dashboard/Dashboard';
import Mascotas from './Mascota/Mascotas';
import Pedidos from './Pedido/Pedidos';
import Alimentos from './Alimento/Alimentos';
import Proveedores from './Proveedor/Proveedores';
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
                                <Route exact path="/Mascotas" component = {Mascotas}/>
                                <Route exact path="/Pedidos" component = {Pedidos}/>
                                <Route exact path="/Alimentos" component = {Alimentos}/>
                                <Route exact path="/Proveedores" component = {Proveedores}/>
                            </Switch>
                        </BrowserRouter>
                    
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
}
export default Container;