  
import React, {useEffect,useState} from 'react';
import 'fontsource-roboto';
import '../assets/css/components/Dashboard.css';
import {Grid} from '@material-ui/core';
import BarChart from './BarChart'
import Card from './Card'

function Dashboard(props) {
    const [consumoAlimentos, setConsumoAlimentos] = useState([]);
    
    const getConsumoAlimentos = async() => {
        try {
            const response =  await fetch("http://localhost:5000/dashboard")
            const jasonData =  await response.json();
            
                setConsumoAlimentos(jasonData);
            
            
        } catch (err) {
            console.error(err.message);
        }
    }
    
    useEffect(()=> {
        getConsumoAlimentos();
    }, []);
    
    console.log(consumoAlimentos); 

    return (
        <Grid container className='content'>
            <Grid container >
                <Grid item className='cardsContainer' xs={3}>
                    <div>
                        <Card/>
                    </div>
                </Grid>
                <Grid item className='cardsContainer' xs={3}>
                    <div>
                        <Card/>
                    </div>
                </Grid>
                <Grid item className='cardsContainer' xs={3}>
                    <div>
                        <Card/>
                    </div>
                </Grid>
                <Grid item className='cardsContainer' xs={3}>
                    <div>
                        <Card/>
                    </div>
                </Grid>
            </Grid>
            <Grid item className='chartsContainer' xs={12}>
                <div className='chart'>
                    <BarChart names={consumoAlimentos.map(consumo =>(consumo.count))} values={consumoAlimentos.map(consumo =>(consumo.count))}/>
                </div>
            </Grid>
        </Grid>      
    );
}

export default Dashboard;