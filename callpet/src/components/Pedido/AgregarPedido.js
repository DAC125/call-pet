import React, {Fragment, useEffect, useState} from 'react';
import {Modal} from 'react-bootstrap';

const AgregarMascota = () => {

    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [pedido, setPedido] = useState([]);
    const [fechaCompra, setFechaCompra] = useState("");
    const [fechaVencimiento, setFechaVencimiento] = useState("");
    const [consumoDias, setConsumoDias] = useState(0);
    const [tiempoAviso, setTiempoAviso] = useState(0);
    const [idCliente, setIdCliente] = useState(0);
    const [nombreCliente, setNombreCliente] = useState("");

    const onSubmitForm = async e => {

    	e.preventDefault();
    	try {

    		const body = { fechaCompra, fechaVencimiento, consumoDias, tiempoAviso, idCliente };
    		console.log("Body: ")
    		console.log(body);
    		const response = await fetch(
    			"http://localhost:5000/Pedidos", 
    		{
    			method: "POST",
    			headers: {"Content-Type": "application/json"},
    			body: JSON.stringify(body)
    		});

    		window.location = "/Pedidos";
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

                <Modal.Header>Agregar Nuevo Pedido</Modal.Header>

                <Modal.Body>
                   <form onSubmit={onSubmitForm}>
	                  <div class="form-group md-3">
					    <label for="exampleFormControlInput1">Fecha Compra</label>
					    <input 
					    	type="date" 
					    	className="form-control" 
					    	id="exampleFormControlInput1" 
					    	placeholder="12/01/1998"
					    	value={fechaCompra}
					    	onChange={e => setFechaCompra(e.target.value)}
					    />
					  </div>
					  <div className="form-group my-3">
					    <label for="exampleFormControlInput1">Fecha Vencimiento</label>
					    <input 
						    type="date" 
						    className="form-control" 
						    id="exampleFormControlInput2" 
						    placeholder="Canino, Felino, Otros"
						    value={fechaVencimiento}
					    	onChange={e => setFechaVencimiento(e.target.value)}
					    />
					  </div>
					  <div class="form-group my-3">
					    <label for="exampleFormControlInput1">Consumo Días</label>
					    <input 
						    type="number" 
						    class="form-control" 
						    id="exampleFormControlInput3" 
						    placeholder="Golden Retriever"
						    value={consumoDias}
						    onChange={e => setConsumoDias(e.target.value)}
					    />
					    	
					  </div>
					  <div class="form-group my-3">
					    <label for="exampleFormControlInput1">Tiempo Aviso</label>
					    <input 
						    type="number" 
						    class="form-control" 
						    id="exampleFormControlInput4" 
						    placeholder="6 (Adams-Lowe)"
						    value={tiempoAviso}
					    	onChange={e => setTiempoAviso(e.target.value)}
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