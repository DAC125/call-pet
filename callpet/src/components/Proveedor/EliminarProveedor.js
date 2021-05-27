import React, {Fragment, useEffect, useState} from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import {Button} from '@material-ui/core'
import Box from '@material-ui/core/Box';


const EliminarProveedor = ({row}) => {

	const [id_proveedor, setId] = useState(row.original.id_proveedor);

    const eliminarProveedor = async e => {

    	e.preventDefault();
    	try {

    		console.log("funcion" + row.original.id_proveedor);
    		const eliminar = await fetch (
    			`http://localhost:5000/proveedores/${row.original.id_proveedor}`, 
    		{
    			method: "DELETE"
    		});

    		window.location = "/Proveedores";

    	} catch (err) {
    		console.error(err.message);
    	}
    };

	return (

		<div>
			<Box display="flex" justifyContent="center">
				<Button onClick={e => eliminarProveedor(e)} className="buttonDelete" startIcon={<DeleteIcon />}> </Button>
 			</Box>
	    </div>

	)
};

export default EliminarProveedor;