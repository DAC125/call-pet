//* Standard library imports *//
import React, {useEffect, useState} from 'react';

//* Third-Party imports *//
import 'fontsource-roboto';
import {render} from 'react-dom';
import ReactPaginate from 'react-paginate';

//* Local application imports *//
import '../../assets/css/components/Clientes.css';
import PaginacionCliente from "./PaginacionCliente.js";
import AgregarCliente from "./AgregarCliente.js"


function Clientes(props) {

    return(

        <div>
            <PaginacionCliente />
            
            <AgregarCliente />
        </div>

        
    )
}
export default Clientes;