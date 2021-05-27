import React, {Fragment, useEffect, useState} from 'react';
import {Modal} from 'react-bootstrap';
import {Button} from '@material-ui/core'
import EditIcon from '@material-ui/icons/Edit';

const EditarAlimento = ({row}) => {

    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [nombreProveedor, setNombreProveedor] = useState(row.original.nombre_proveedor);
    const [telefono, setTelefono] = useState(row.original.telefono);
    const [correo, setCorreo] = useState(row.original.correo);
    const [idAlimento, setIdAlimento] = useState(row.original.id_alimento);

    const onSubmitForm = async e => {

    	e.preventDefault();
    	try {

    		const body = { nombreProveedor, telefono, correo, idAlimento };
    		console.log("ID Proveedor: " + row.original.id_proveedor);
    		const response = await fetch(
    			`http://localhost:5000/proveedores/${row.original.id_proveedor}`, 
    		{
    			method: "PUT",
    			headers: {"Content-Type": "application/json"},
    			body: JSON.stringify(body)
    		});

    		window.location = "/Proveedores";
    	} catch (err) {
    		console.error(err.message);
    	}
    };

	return (

		<div>

			<Button onClick={()=>setModalIsOpen(true)} className="buttonEdit" startIcon={<EditIcon />}> </Button>

	        <Modal show={modalIsOpen}>

	            <Modal.Header>Editar Proveedor Existente</Modal.Header>

	            <Modal.Body>
	               <form onSubmit={onSubmitForm}>
	                  <div class="form-group md-3">
					    <label for="exampleFormControlInput1">Nombre Proveedor</label>
					    <input 
					    	type="text" 
					    	className="form-control" 
					    	id="exampleFormControlInput1" 
					    	placeholder="Alimentos Pro Mascota"
					    	value={nombreProveedor}
					    	onChange={e => setNombreProveedor(e.target.value)}
					    />
					  </div>
					  <div className="form-group my-3">
					    <label for="exampleFormControlInput1">Teléfono</label>
					    <input 
						    type="number" 
						    className="form-control" 
						    id="exampleFormControlInput2" 
						    placeholder="88888888"
						    value={telefono}
					    	onChange={e => setTelefono(e.target.value)}
					    />
					  </div>
					  <div class="form-group my-3">
					    <label for="exampleFormControlInput1">Correo</label>
					    <input 
						    type="text" 
						    class="form-control" 
						    id="exampleFormControlInput3" 
						    placeholder="email@example.com"
						    value={correo}
						    onChange={e => setCorreo(e.target.value)}
					    />
					    	
					  </div>
					  <div class="form-group my-3">
					    <label for="exampleFormControlInput1">ID Alimento</label>
					    <input 
						    type="number" 
						    class="form-control" 
						    id="exampleFormControlInput3" 
						    placeholder="6 ()"
						    value={idAlimento}
						    onChange={e => setIdAlimento(e.target.value)}
					    />
					    	
					  </div>
					 
					  <button className="btn btn-success">Editar</button>
					  <button className="btn btn-danger mx-3" type="button" onClick={()=>setModalIsOpen(false)}>Cancelar</button>
	                </form> 
	            </Modal.Body>

	            <Modal.Footer id="clienteModalFooter">
	                
	            </Modal.Footer>
	        </Modal>
	    </div>

	)
};

export default EditarAlimento;