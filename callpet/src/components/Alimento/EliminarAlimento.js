import React, {Fragment, useEffect, useState} from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import {Button} from '@material-ui/core'
import Box from '@material-ui/core/Box';


const EliminarAlimento = ({row}) => {

	const [id_alimento, setId] = useState(row.original.id_alimento);

    const eliminarAlimento = async e => {

    	e.preventDefault();
    	try {

    		console.log("funcion" + row.original.id_alimento);
    		const eliminar = await fetch (
    			`http://localhost:5000/alimentos/${row.original.id_alimento}`, 
    		{
    			method: "DELETE"
    		});

    		window.location = "/Alimentos";

    	} catch (err) {
    		console.error(err.message);
    	}
    };

	return (

		<div>
			<Box display="flex" justifyContent="center">
				<Button onClick={e => eliminarAlimento(e)} className="buttonDelete" startIcon={<DeleteIcon />}> </Button>
 			</Box>
	    </div>

	)
};

export default EliminarAlimento;