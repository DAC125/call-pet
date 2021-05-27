//* Standard library imports *//
import React, {useEffect,useState} from 'react';
import 'fontsource-roboto';
import '../../assets/css/components/Clientes.css';

//* Third-Party imports *//


//* Local application imports *//
import PaginacionProveedor from "./PaginacionProveedor.js"
import AgregarProveedor from "./AgregarProveedor.js"



function Proveedores(props) {

    return(
        
        <div>
            <PaginacionProveedor />

            <AgregarProveedor />
        </div>

    )
}
export default Proveedores;