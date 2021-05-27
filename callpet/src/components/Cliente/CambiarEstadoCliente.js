import React, {Fragment, useEffect, useState} from 'react';
import LoopIcon from '@material-ui/icons/Loop';
import {Button} from '@material-ui/core'
import Box from '@material-ui/core/Box';


const CambiarEstadoCliente = ({row}) => {

	

	const [id, setId] = useState(row.original.id);
	const [estado, setEstado] = useState(!row.original.estado);

	

   	
    const cambiarEstadoCliente = async e => {

    	e.preventDefault();
    	try {

    		const body = { estado };
    		console.log("funcion" + row.original.id);
    		const cambiarEstado = await fetch (
    			`http://localhost:5000/clientes/switch_client_state/${row.original.id}`, 
    		{
    			method: "PUT",
    			headers: {"Content-Type": "application/json"},
    			body: JSON.stringify(body)
    		});

    		window.location = "/Clientes";

    	} catch (err) {
    		console.error(err.message);
    	}
    };

	return (

		<div>
			<Box display="flex" justifyContent="center">
				<Button onClick={e => cambiarEstadoCliente(e)} className="buttonDelete" startIcon={<LoopIcon />}> </Button>
 			</Box>
	    </div>

	)
};

export default CambiarEstadoCliente;