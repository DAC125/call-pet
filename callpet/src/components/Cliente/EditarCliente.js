import React, {Fragment, useEffect, useState} from 'react';
import {Modal} from 'react-bootstrap';
import {Button} from '@material-ui/core'
import EditIcon from '@material-ui/icons/Edit';

const EditarCliente = ({row}) => {

	const [modalIsOpen, setModalIsOpen] = useState(false);
    const [searchValue, setSearchValue] = useState("");
    const [cliente, setCliente] = useState([]);
    const [nombre, setNombre] = useState(row.original.nombre);
    const [primerApellido, setPrimerApellido] = useState(row.original.primer_apellido);
    const [segundoApellido, setSegundoApellido] = useState(row.original.segundo_apellido);
    const [telefono, setTelefono] = useState(row.original.telefono);
    const [direccionEntrega, setDireccionEntrega] = useState(row.original.direccion_entrega);
    const [notificacion, setNotificacion] = useState(row.original.notificacion);
    const [estado, setEstado] = useState(row.original.estado);

   	

    const onSubmitForm = async e => {

    	e.preventDefault();
    	try {

    		const body = {nombre, primerApellido, segundoApellido, telefono, direccionEntrega, notificacion, estado};
    		console.log(body);
    		const response = await fetch(
    			`http://localhost:5000/clientes/${row.original.id}`, 
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

			<Button onClick={()=>setModalIsOpen(true)} className="buttonEdit" startIcon={<EditIcon />}> </Button>

	        <Modal show={modalIsOpen}>

	            <Modal.Header>Editar Cliente Existente</Modal.Header>

	            <Modal.Body>
	               <form onSubmit={onSubmitForm}>
	                  <div class="form-group md-3">
					    <label for="exampleFormControlInput1">Nombre</label>
					    <input 
					    	type="text" 
					    	className="form-control" 
					    	id="exampleFormControlInput1" 
					    	placeholder="Juancho"
					    	value={nombre}
					    	onChange={e => setNombre(e.target.value)}
					    />
					  </div>
					  <div className="form-group my-3">
					    <label for="exampleFormControlInput1">Primer Apellido</label>
					    <input 
						    type="text" 
						    className="form-control" 
						    id="exampleFormControlInput2" 
						    placeholder="Pérez"
						    value={primerApellido}
					    	onChange={e => setPrimerApellido(e.target.value)}
					    />
					  </div>
					  <div class="form-group my-3">
					    <label for="exampleFormControlInput1">Segundo Apellido</label>
					    <input 
						    type="text" 
						    class="form-control" 
						    id="exampleFormControlInput3" 
						    placeholder="Martínez"
						    value={segundoApellido}
					    	onChange={e => setSegundoApellido(e.target.value)}
					    />
					  </div>
					  <div class="form-group my-3">
					    <label for="exampleFormControlInput1">Teléfono</label>
					    <input 
						    type="number" 
						    class="form-control" 
						    id="exampleFormControlInput4" 
						    placeholder="88888888"
						    value={telefono}
					    	onChange={e => setTelefono(e.target.value)}
					    />
					  </div>
					  <div class="form-group my-3">
					    <label for="exampleFormControlInput1">Dirección de Entrega</label>
					    <input 
						    type="text" 
						    class="form-control" 
						    id="exampleFormControlInput4" 
						    placeholder="Por el palo de mango hasta pegar con cerca"
						    value={direccionEntrega}
					    	onChange={e => setDireccionEntrega(e.target.value)}
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

export default EditarCliente;