import React, {useEffect,useState} from 'react';
import 'fontsource-roboto';
import '../../assets/css/components/Clientes.css';



function Mascotas(props) {

    const [mascotas, setMascotas] = useState([]);

    const getMascotas = async() => {
        try {
            const response = await fetch("http://localhost:5000/mascotas")
            const jasonData = await response.json();

            setMascotas(jasonData);
        } catch (err) {
            console.error(err.message);
        }
    }

    useEffect(()=> {
        getMascotas();
    }, []);
    
    console.log(mascotas);
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
                {mascotas.map(mascota =>(
                        <tr>
                        <th scope="row">{mascota.id_mascota}</th>
                        <td>{mascota.nombre_mascota}</td>
                        </tr>
                    ))}
                    
                    
                </tbody>
                </table>
        </div>

    )
}
export default Mascotas;