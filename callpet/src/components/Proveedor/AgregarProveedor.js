import React, {Fragment, useEffect, useState} from 'react';
import {Modal} from 'react-bootstrap';

const AgregarProveedor = () => {

    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [nombreProveedor, setNombreProveedor] = useState("");
    const [telefono, setTelefono] = useState(88888888);
    const [correo, setCorreo] = useState("");
    const [idAlimento, setIdAlimento] = useState(0);

    const onSubmitForm = async e => {

    	e.preventDefault();
    	try {

    		const body = { nombreProveedor, telefono, correo, idAlimento };
    		console.log("Body: ")
    		console.log(body);
    		const response = await fetch(
    			"http://localhost:5000/Proveedores", 
    		{
    			method: "POST",
    			headers: {"Content-Type": "application/json"},
    			body: JSON.stringify(body)
    		});

    		window.location = "/Proveedores";
    	} catch (err) {
    		console.error(err.message);
    	}
    };

	return (

		<div className="sectionHeader">

            <button className="buttonColor mx-3 my-3" onClick={()=>setModalIsOpen(true)}>
                +  Agregar Pedido
            </button>

            <Modal show={modalIsOpen}>

                <Modal.Header>Agregar Nuevo Proveedor</Modal.Header>

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
					  

					  <button className="btn btn-success">Agregar</button>
					  <button className="btn btn-danger mx-3" type="button" onClick={()=>setModalIsOpen(false)}>Cancelar</button>
                    </form> 
                </Modal.Body>

                <Modal.Footer id="clienteModalFooter">
                    
                </Modal.Footer>
            </Modal>
        </div>
	)
};

export default AgregarProveedor;