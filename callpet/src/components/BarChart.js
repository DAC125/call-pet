import React,{Component} from 'react'
import { Line } from 'react-chartjs-2'

class BarChart extends Component{
    constructor(props){
        super(props);
        this.state = {
            chartData:{
                labels:['alimento1','alimento2','alimento3','alimento4','alimento5','alimento6'],
                datasets:[
                    {
                        label: 'cantidad',
                        data:[5,6,7,8,10,15],
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