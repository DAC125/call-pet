import React, {Fragment, useEffect, useState} from 'react';
import {Modal} from 'react-bootstrap';
import {Button} from '@material-ui/core'
import EditIcon from '@material-ui/icons/Edit';

const EditarPedido = ({row}) => {

	const [modalIsOpen, setModalIsOpen] = useState(false);
    const [pedido, setPedido] = useState([]);
    const [fechaCompra, setFechaCompra] = useState(row.original.fecha_compra);
    const [fechaVencimiento, setFechaVencimiento] = useState(row.original.fecha_vencimiento);
    const [consumoDias, setConsumoDias] = useState(row.original.consumo_dias);
    const [tiempoAviso, setTiempoAviso] = useState(row.original.tiempo_aviso);
    const [idCliente, setIdCliente] = useState(row.original.id_cliente);
    const [nombreCliente, setNombreCliente] = useState(row.original.nombre);

    const onSubmitForm = async e => {

    	e.preventDefault();
    	try {

    		const body = { fechaCompra, fechaVencimiento, consumoDias, tiempoAviso, idCliente };
    		console.log("ID Pedido: " + row.original.id_pedido);
    		const response = await fetch(
    			`http://localhost:5000/pedidos/${row.original.id_pedido}`, 
    		{
    			method: "PUT",
    			headers: {"Content-Type": "application/json"},
    			body: JSON.stringify(body)
    		});

    		window.location = "/Pedidos";
    	} catch (err) {
    		console.error(err.message);
    	}
    };

	return (

		<div>

			<Button onClick={()=>setModalIsOpen(true)} className="buttonEdit" startIcon={<EditIcon />}> </Button>

	        <Modal show={modalIsOpen}>

	            <Modal.Header>Editar Pedido Existente</Modal.Header>

	            <Modal.Body>
	               <form onSubmit={onSubmitForm}>
	                  <div class="form-group md-3">
					    <label for="exampleFormControlInput1">Fecha Compra</label>
					    <input 
					    	type="date" 
					    	className="form-control" 
					    	id="exampleFormControlInput1" 
					    	placeholder="Fido"
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

export default EditarPedido;