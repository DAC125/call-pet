import React, {Fragment, useEffect, useState} from 'react';
import 'fontsource-roboto';
import '../../assets/css/components/Clientes.css';
import {render} from 'react-dom';
import ReactPaginate from 'react-paginate';
import Pagination from "./PaginacionCliente.js";
import AgregarCliente from "./AgregarCliente.js"


function Clientes(props) {

    return(

        <div>
            <Pagination />
            
            <AgregarCliente />
        </div>

        
    )
}
export default Clientes;