import React, {useEffect,useState} from 'react';
import 'fontsource-roboto';
import '../assets/css/components/Dashboard.css';
import {Grid} from '@material-ui/core';
import BarChart from './BarChart'


function Dashboard(props) {
    const [consumoAlimentos, setConsumoAlimentos] = useState([]);

    const getConsumoAlimentos = async() => {
        try {
            const response = await fetch("http://localhost:5000/dashboard")
            const jasonData = await response.json();

            setConsumoAlimentos(jasonData);
        } catch (err) {
            console.error(err.message);
        }
    }

    useEffect(()=> {
        getConsumoAlimentos();
    }, []);
    
    console.log(consumoAlimentos);

    return(
        <Grid container className='content'>
            <Grid className='charts' xs={6}>
                <div>
                    <BarChart lista={['lista1','lista2','lista3','lista4','lista5','lista6']}/>
                </div>
            </Grid>
            <Grid className='charts' xs={6}>
                <div>
                    <BarChart lista={['lista1','lista2','lista3','lista4','lista5','lista6']}/>
                </div>
            </Grid>
            <Grid className='charts' xs={6}>
                <div>
                    <BarChart lista={['lista1','lista2','lista3','lista4','lista5','lista6']}/>
                </div>
            </Grid>
            <Grid className='charts' xs={6}>
                <div>
                    <BarChart lista={['lista1','lista2','lista3','lista4','lista5','lista6']}/>
                </div>
            </Grid>
            
        </Grid>
        

    )
}
export default Dashboard;