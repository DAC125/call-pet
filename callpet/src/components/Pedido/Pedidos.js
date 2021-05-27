//* Standard library imports *//
import React, {useEffect,useState} from 'react';
import 'fontsource-roboto';
import '../../assets/css/components/Clientes.css';

//* Third-Party imports *//


//* Local application imports *//
import PaginacionPedido from "./PaginacionPedido.js"
import AgregarPedido from "./AgregarPedido.js"



function Pedidos(props) {

    return(
        
        <div>
            <PaginacionPedido />

            <AgregarPedido />
        </div>

    )
}
export default Pedidos;