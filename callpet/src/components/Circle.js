import React,{useEffect,useState} from 'react'
import '../assets/css/components/Circle.css'
import ProgressBar from 'react-customizable-progressbar'

function Card(props) {
    const [data, setdata] = useState([]);
    
    const getdata = async () => {
        try {
            const response = await fetch("http://localhost:5000"+props.data)
            const jasonData = await response.json();

            
           setdata(jasonData);
                
            
               
        } catch (err) {
            console.error(err.message);
        }
    }
    
    useEffect(()=> {
        getdata();         
    }, []);

    const consumo = data.map(consumo =>(consumo.values));
    
    return(
        <ProgressBar className= 'circle' progress={consumo} radius={70} strokeColor={props.color} steps={consumo<=999?'1000':'9999'}>
            <div className='circle'>
                <div>{consumo}</div>
            </div>
        </ProgressBar>
    )
}

export default Card;