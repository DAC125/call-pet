import React,{useEffect,useState} from 'react'
import { Line } from 'react-chartjs-2'


function LineChart (props){

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
            <Line 
            data={{

                /*labels:['lista','lista'],*/
                labels:data.map(consumo =>(consumo.labels)),
                datasets:[
                    {
                        label: props.title,
                        data: data.map(consumo =>(consumo.values)),
                        backgroundColor: ['#FF7F50','#800080','#FF7F50','#800080']
                    }
                ]
            }}
            height={props.height}
            width={props.width}
            options={{
                maintainAspectRatio: false,
                borderColor: '#ffaf7a'
                
            }}
            />
      </div>
    )
        
}

export default LineChart