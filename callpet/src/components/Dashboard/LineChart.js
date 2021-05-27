import React,{useEffect,useState} from 'react'
import { Line } from 'react-chartjs-2'


function LineChart (props){

    const [consumoAlimentos, setConsumoAlimentos] = useState([]);
    
    const getConsumoAlimentos = async () => {
        try {
            const response = await fetch("http://localhost:5000"+props.data)
            const jasonData = await response.json();

            
           setConsumoAlimentos(jasonData);
                
            
               
        } catch (err) {
            console.error(err.message);
        }
    }
    
    useEffect(()=> {
        getConsumoAlimentos();         
    }, []);
    
    console.log(consumoAlimentos)
    
    
    return (
        <div>
            <Line 
            data={{

                /*labels:['lista','lista'],*/
                labels:consumoAlimentos.map(consumo =>(consumo.marca)),
                datasets:[
                    {
                        label: 'cantidad',
                        data: consumoAlimentos.map(consumo =>(consumo.count)),
                        backgroundColor: '#800080'
                    }
                ]
            }}
            height={800}
            width={600}
            options={{
                maintainAspectRatio: false,
                
            }}
            />
      </div>
    )
        
}

export default LineChart