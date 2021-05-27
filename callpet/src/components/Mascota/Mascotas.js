//* Standard library imports *//
import React, {useEffect,useState} from 'react';
import 'fontsource-roboto';
import '../../assets/css/components/Clientes.css';

//* Third-Party imports *//


//* Local application imports *//
import PaginacionMascota from "./PaginacionMascota.js"
import AgregarMascota from "./AgregarMascota.js"



function Mascotas(props) {

    return(
        
        <div>
            <PaginacionMascota />

            <AgregarMascota />
        </div>

    )
}
export default Mascotas;