import React, {useEffect,useState} from 'react';
import 'fontsource-roboto';
import '../assets/css/components/Clientes.css';



function Clientes(props) {

    const [clientes, setClientes] = useState([]);

    const getClientes = async() => {
        try {
            const response = await fetch("http://localhost:5000/mascotas")
            const jasonData = await response.json();

            setClientes(jasonData);
        } catch (err) {
            console.error(err.message);
        }
    }

    useEffect(()=> {
        getClientes();
    }, []);
    
    console.log(clientes);
    return(
        <div>
                     
           <table className="tableList table">
                <thead>
                    <tr>
                    <th scope="col">id</th>
                    <th scope="col">Nombre</th>
                    </tr>
                </thead>
                <tbody>
                {clientes.map(cliente =>(
                        <tr>
                        <th scope="row">{cliente.id}</th>
                        <td>{cliente.nombre}</td>
                        </tr>
                    ))}
                    
                    
                </tbody>
                </table>
        </div>

    )
}
export default Clientes;