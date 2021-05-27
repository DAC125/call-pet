import React,{useEffect,useState} from 'react'
import { Doughnut } from 'react-chartjs-2'


function DoughnutChart (props){

    const [mayoriaEspecie, setmayoriaEspecie] = useState([]);
    
    const getmayoriaEspecie = async () => {
        try {
            const response = await fetch("http://localhost:5000"+props.data)
            const jasonData = await response.json();

            
           setmayoriaEspecie(jasonData);
                
            
               
        } catch (err) {
            console.error(err.message);
        }
    }
    
    useEffect(()=> {
        getmayoriaEspecie();         
    }, []);
    
    console.log(mayoriaEspecie)
    
    
    return (
        <div>
            <Doughnut 
            data={{

                /*labels:['lista','lista'],*/
                labels:mayoriaEspecie.map(consumo =>(consumo.labels)),
                datasets:[
                    {
                     
                        data: mayoriaEspecie.map(consumo =>(consumo.values)),
                        backgroundColor: ['#800080','#FF7F50','#ffaf7a']
                    }
                ]
            }}
            options={{
                maintainAspectRatio: false,
            }}
            />
      </div>
    )
        
}

export default DoughnutChart;