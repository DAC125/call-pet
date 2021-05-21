import React,{Component} from 'react'
import { Line } from 'react-chartjs-2'


class BarChart extends Component{
    constructor(props){
        console.log(props.names)
        console.log(props.values)
        super(props);
        this.state = {
            chartData:{

                /*labels:['lista','lista'],*/
                labels:props.names,
                datasets:[
                    {
                        label: 'cantidad',
                        data: props.values,
                        backgroundColor: '#800080'
                    }
                ]
            }
        }
    }

    
    
    render(){
    return (
        <div>
            <Line 
            data={this.state.chartData}
            height={801}
            width={600}
            options={{
                maintainAspectRatio: false,
            }}
            />
      </div>
    )
        };
}

export default BarChart