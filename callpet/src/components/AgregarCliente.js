import React, {Fragment, useEffect, useState} from 'react';
import {Modal} from 'react-bootstrap';
import SearchBar from "./SearchBar.js";

const AgregarCliente = () => {

	const [modalIsOpen, setModalIsOpen] = useState(false);
    const [searchValue, setSearchValue] = useState("");
    const [cliente, setCliente] = useState([]);

    const onSubmitForm = async e => {

    	e.preventDefault();
    	try {

    		const body = {cliente};
    		console.log(body);
    		const response = await fetch(
    			"http://localhost:5000/clientes", 
    		{
    			method: "POST",
    			headers: {"Content-Type": "application/json"},
    			body: JSON.stringify(body)
    		});

    		window.location = "/";
    	} catch (err) {
    		console.error(err.message);
    	}
    };

	return (

		<div className="sectionHeader">

            <button className="buttonColor mx-3 my-3" onClick={()=>setModalIsOpen(true)}>
                +  Agregar Cliente
            </button>

            <Modal show={modalIsOpen}>

                <Modal.Header>Agregar Nuevo Cliente</Modal.Header>

                <Modal.Body>
                   <form onSubmit={onSubmitForm}>
                      <div class="form-group md-3">
					    <label for="exampleFormControlInput1">Nombre</label>
					    <input 
					    	type="text" 
					    	className="form-control" 
					    	id="exampleFormControlInput1" 
					    	placeholder="Juancho"
					    	value={cliente}
					    	onChange={e => setCliente(e.target.value)}
					    />
					  </div>
					  <div className="form-group my-3">
					    <label for="exampleFormControlInput1">Primer Apellido</label>
					    <input 
						    type="text" 
						    className="form-control" 
						    id="exampleFormControlInput2" 
						    placeholder="Pérez"
						    value={cliente}
					    	onChange={e => setCliente(e.target.value)}
					    />
					  </div>
					  <div class="form-group my-3">
					    <label for="exampleFormControlInput1">Segundo Apellido</label>
					    <input 
						    type="text" 
						    class="form-control" 
						    id="exampleFormControlInput3" 
						    placeholder="Martínez"
						    value={cliente}
					    	onChange={e => setCliente(e.target.value)}
					    />
					  </div>
					  <div class="form-group my-3">
					    <label for="exampleFormControlInput1">Teléfono</label>
					    <input 
						    type="number" 
						    class="form-control" 
						    id="exampleFormControlInput4" 
						    placeholder="88888888"
						    value={cliente}
					    	onChange={e => setCliente(e.target.value)}
					    />
					  </div>
                    </form> 
                </Modal.Body>

                <Modal.Footer>
                    <button className="btn btn-success">Agregar</button>
                    <button className="btn btn-danger" onClick={()=>setModalIsOpen(false)}>Cancelar</button>
                </Modal.Footer>
            </Modal>
        </div>
	)
};

export default AgregarCliente;