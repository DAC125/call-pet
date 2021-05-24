import React, {Fragment, useEffect, useState} from 'react';
import 'fontsource-roboto';
import '../assets/css/components/Clientes.css';
import {render} from 'react-dom';
import ReactPaginate from 'react-paginate';
import Pagination from "./Pagination.js";
import AgregarCliente from "./AgregarCliente.js"


function Clientes(props) {

    const [clientes, setClientes] = useState([]);

    const getClientes = async() => {
        try {
            const response = await fetch("http://localhost:5000/clientes")
            const jasonData = await response.json();

            setClientes(jasonData);
        } catch (err) {
            console.error(err.message);
        }
    }

    useEffect(()=> {
        getClientes();
    }, []);
    
    console.log(clientes);

    return(

        <div>
            <AgregarCliente />
            
            <Pagination />
        </div>

        
    )
}
export default Clientes;