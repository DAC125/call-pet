import React, {Fragment, useEffect, useState} from 'react';
import {Modal} from 'react-bootstrap';
import {Button} from '@material-ui/core'
import EditIcon from '@material-ui/icons/Edit';

const EditarMascota = ({row}) => {

	const [modalIsOpen, setModalIsOpen] = useState(false);
    const [searchValue, setSearchValue] = useState("");
    const [mascota, setMascota] = useState([]);
    const [nombreMascota, setNombreMascota] = useState(row.original.nombre_mascota);
    const [especie, setEspecie] = useState(row.original.especie);
    const [raza, setRaza] = useState(row.original.raza);
    const [nombreCliente, setNombreCliente] = useState(row.original.nombre);
    const [marcaAlimento, setMarcaAlimento] = useState(row.original.marca);
    const [idAlimento, setIdAlimento] = useState(row.original.id_alimento);
    const [idCliente, setIdCliente] = useState(row.original.id_cliente);

    const onSubmitForm = async e => {

    	e.preventDefault();
    	try {

    		const body = { nombreMascota, especie, raza, idCliente, idAlimento };
    		console.log("ID Mascota: " + row.original.id_mascota);
    		const response = await fetch(
    			`http://localhost:5000/mascotas/${row.original.id_mascota}`, 
    		{
    			method: "PUT",
    			headers: {"Content-Type": "application/json"},
    			body: JSON.stringify(body)
    		});

    		window.location = "/Mascotas";
    	} catch (err) {
    		console.error(err.message);
    	}
    };

	return (

		<div>

			<Button onClick={()=>setModalIsOpen(true)} className="buttonEdit" startIcon={<EditIcon />}> </Button>

	        <Modal show={modalIsOpen}>

	            <Modal.Header>Editar Mascota Existente</Modal.Header>

	            <Modal.Body>
	               <form onSubmit={onSubmitForm}>
	                  <div class="form-group md-3">
					    <label for="exampleFormControlInput1">Nombre Mascota</label>
					    <input 
					    	type="text" 
					    	className="form-control" 
					    	id="exampleFormControlInput1" 
					    	placeholder="Fido"
					    	value={nombreMascota}
					    	onChange={e => setNombreMascota(e.target.value)}
					    />
					  </div>
					  <div className="form-group my-3">
					    <label for="exampleFormControlInput1">Especie</label>
					    <input 
						    type="text" 
						    className="form-control" 
						    id="exampleFormControlInput2" 
						    placeholder="Canino, Felino, Otros"
						    value={especie}
					    	onChange={e => setEspecie(e.target.value)}
					    />
					  </div>
					  <div class="form-group my-3">
					    <label for="exampleFormControlInput1">Raza</label>
					    <input 
						    type="text" 
						    class="form-control" 
						    id="exampleFormControlInput3" 
						    placeholder="Golden Retriever"
						    value={raza}
					    	onChange={e => setRaza(e.target.value)}
					    />
					  </div>
					  <div class="form-group my-3">
					    <label for="exampleFormControlInput1">ID Cliente</label>
					    <input 
						    type="number" 
						    class="form-control" 
						    id="exampleFormControlInput4" 
						    placeholder="6 (Adams-Lowe)"
						    value={idCliente}
					    	onChange={e => setIdCliente(e.target.value)}
					    />
					  </div>
					  <div class="form-group my-3">
					    <label for="exampleFormControlInput1">ID Alimento</label>
					    <input 
						    type="number" 
						    class="form-control" 
						    id="exampleFormControlInput4" 
						    placeholder="6 (Adams-Lowe)"
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

export default EditarMascota;