import React, {Fragment, useState} from 'react';
import 'fontsource-roboto';
import '../../assets/css/components/InputClientes.css';
import { ContactSupportOutlined } from '@material-ui/icons';



function Clientes(props) {
    

    const onSubmitform = async e =>{
        e.preventDefault();
        try {
            const body = {nombre,primerApellido,segundoApellido,telefono,direccion};
            const response = await fetch('http://localhost:5000/insertClient',{
                method: "POST",
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(body)
            });
            
            console.log(response);

        } catch (error) {
            console.log(error.message)
        }
    }

    const [nombre,setNombre] = useState('');
    const [primerApellido,setPrimerApellido] = useState('');
    const [segundoApellido,setSegundoApellido ] = useState('');
    const [telefono,setTelefono] = useState('');
    const [direccion,setDireccion] = useState('');
    
    return(
        <Fragment>
            <form className="d-flex mt-5" onSubmit={onSubmitform}>
            <input
                type='text'
                className='form-control'
                value={nombre}
                onChange={e => setNombre(e.target.value)}/>

            <input
                type='text'
                className='form-control'
                value={primerApellido}
                onChange={e=> setPrimerApellido(e.target.value)}/>

            <input
                type='text'
                className='form-control'
                value={segundoApellido}
                onChange={e=> setSegundoApellido(e.target.value)}/>

            <input
                type='text'
                className='form-control'
                value={telefono}
                onChange={e=> setTelefono(e.target.value)}/>

            <input
                type='text'
                className='form-control'
                value={direccion}
                onChange={e=> setDireccion(e.target.value)}/>


                <button className = 'button btn'>Add</button>
                
            </form>
        </Fragment>

    );
}
export default Clientes;