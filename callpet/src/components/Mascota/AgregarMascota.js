import React, {Fragment, useEffect, useState} from 'react';
import {Modal} from 'react-bootstrap';

const AgregarMascota = () => {

    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [mascota, setMascota] = useState([]);
    const [nombreMascota, setNombreMascota] = useState("");
    const [especie, setEspecie] = useState("");
    const [raza, setRaza] = useState("");
    const [idCliente, setIdCliente] = useState(0);
    const [idAlimento, setIdAlimento] = useState(0);

    
    
   	

    const onSubmitForm = async e => {

    	e.preventDefault();
    	try {

    		const body = { nombreMascota, especie, raza, idCliente, idAlimento };
    		console.log("Body: ")
    		console.log(body);
    		const response = await fetch(
    			"http://localhost:5000/Mascotas", 
    		{
    			method: "POST",
    			headers: {"Content-Type": "application/json"},
    			body: JSON.stringify(body)
    		});

    		window.location = "/Mascotas";
    	} catch (err) {
    		console.error(err.message);
    	}
    };

	return (

		<div className="sectionHeader">

            <button className="buttonColor mx-3 my-3" onClick={()=>setModalIsOpen(true)}>
                +  Agregar Mascota
            </button>

            <Modal show={modalIsOpen}>

                <Modal.Header>Agregar Nueva Mascota</Modal.Header>

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
						    placeholder="2 (Agnola)"
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

export default AgregarMascota;