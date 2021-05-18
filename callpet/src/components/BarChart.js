import React from 'react'
import { Bar } from 'react-chartjs-2'

const BarChart = () => {
    return (
        <div>
            <Bar 
            data={{
                labels: ['alimento1','alimento2','alimento3','alimento4','alimento5','alimento6']
            }}
            height={400}
            width={600}/>
        </div>
    )
}

export default BarChart