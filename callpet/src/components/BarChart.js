import React,{useEffect,useState} from 'react'
import { Bar } from 'react-chartjs-2'


function BarChart (props){

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
    
    console.log(data)
    
    
    return (
        <div>
            <Bar 
            data={{

                /*labels:['lista','lista'],*/
                labels:data.map(consumo =>(consumo.labels)),
                datasets:[
                    {
                        label: props.title,
                        
                        data: data.map(consumo =>(consumo.values)),
                        backgroundColor: '#ffaf7a'
                    },
                    
                ]
            }}
            height={props.height}
            width={props.width}
            options={{
                maintainAspectRatio: false,
                
            }}
            />
      </div>
    )
        
}

export default BarChart