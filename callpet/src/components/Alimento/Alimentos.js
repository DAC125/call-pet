//* Standard library imports *//
import React, {useEffect,useState} from 'react';
import 'fontsource-roboto';
import '../../assets/css/components/Clientes.css';

//* Third-Party imports *//


//* Local application imports *//
import PaginacionAlimento from "./PaginacionAlimento.js"
import AgregarAlimento from "./AgregarAlimento.js"



function Alimentos(props) {

    return(
        
        <div>
            <PaginacionAlimento />

            <AgregarAlimento />
        </div>

    )
}
export default Alimentos;