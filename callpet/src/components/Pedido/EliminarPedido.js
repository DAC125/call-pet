import React, {Fragment, useEffect, useState} from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import {Button} from '@material-ui/core'
import Box from '@material-ui/core/Box';


const EliminarPedido = ({row}) => {

	const [id_pedido, setId] = useState(row.original.id_pedido);

    const eliminarPedido = async e => {

    	e.preventDefault();
    	try {

    		console.log("funcion" + row.original.id_pedido);
    		const eliminar = await fetch (
    			`http://localhost:5000/pedidos/${row.original.id_pedido}`, 
    		{
    			method: "DELETE"
    		});

    		window.location = "/Pedidos";

    	} catch (err) {
    		console.error(err.message);
    	}
    };

	return (

		<div>
			<Box display="flex" justifyContent="center">
				<Button onClick={e => eliminarPedido(e)} className="buttonDelete" startIcon={<DeleteIcon />}> </Button>
 			</Box>
	    </div>

	)
};

export default EliminarPedido;