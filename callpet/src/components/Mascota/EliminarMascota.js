import React, {Fragment, useEffect, useState} from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import {Button} from '@material-ui/core'
import Box from '@material-ui/core/Box';


const EliminarMascota = ({row}) => {

	const [id_mascota, setId] = useState(row.original.id_mascota);

    const eliminarMascota = async e => {

    	e.preventDefault();
    	try {

    		console.log("funcion" + row.original.id_mascota);
    		const eliminar = await fetch (
    			`http://localhost:5000/mascotas/${row.original.id_mascota}`, 
    		{
    			method: "DELETE"
    		});

    		window.location = "/Mascotas";

    	} catch (err) {
    		console.error(err.message);
    	}
    };

	return (

		<div>
			<Box display="flex" justifyContent="center">
				<Button onClick={e => eliminarMascota(e)} className="buttonDelete" startIcon={<DeleteIcon />}> </Button>
 			</Box>
	    </div>

	)
};

export default EliminarMascota;