import React, {Fragment, useEffect, useState} from 'react';
import {Modal} from 'react-bootstrap';

const AgregarAlimento = () => {

    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [marca, setMarca] = useState("");
    const [presentacion, setPresentacion] = useState("");
    const [consumoDiario, setConsumoDiario] = useState("");

    const onSubmitForm = async e => {

    	e.preventDefault();
    	try {

    		const body = { marca, presentacion, consumoDiario };
    		console.log("Body: ")
    		console.log(body);
    		const response = await fetch(
    			"http://localhost:5000/Alimentos", 
    		{
    			method: "POST",
    			headers: {"Content-Type": "application/json"},
    			body: JSON.stringify(body)
    		});

    		window.location = "/Alimentos";
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

                <Modal.Header>Agregar Nuevo Alimento</Modal.Header>

                <Modal.Body>
                   <form onSubmit={onSubmitForm}>
	                  <div class="form-group md-3">
					    <label for="exampleFormControlInput1">marca</label>
					    <input 
					    	type="text" 
					    	className="form-control" 
					    	id="exampleFormControlInput1" 
					    	placeholder="Pedigree"
					    	value={marca}
					    	onChange={e => setMarca(e.target.value)}
					    />
					  </div>
					  <div className="form-group my-3">
					    <label for="exampleFormControlInput1">Presentación</label>
					    <input 
						    type="number" 
						    className="form-control" 
						    id="exampleFormControlInput2" 
						    placeholder="10000 (gramos)"
						    value={presentacion}
					    	onChange={e => setPresentacion(e.target.value)}
					    />
					  </div>
					  <div class="form-group my-3">
					    <label for="exampleFormControlInput1">Consumo Diario</label>
					    <input 
						    type="number" 
						    class="form-control" 
						    id="exampleFormControlInput3" 
						    placeholder="1000 (gramos)"
						    value={consumoDiario}
						    onChange={e => setConsumoDiario(e.target.value)}
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

export default AgregarAlimento;