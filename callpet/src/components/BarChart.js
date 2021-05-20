import React,{Component} from 'react'
import { Line } from 'react-chartjs-2'

class BarChart extends Component{
    constructor(props){
        console.log([props.lista])
        super(props);
        this.state = {
            chartData:{

                labels:props.lista,
                datasets:[
                    {
                        label: 'cantidad',
                        data:[5,6,7,14,10,15],
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
            height={400}
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