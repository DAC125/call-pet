import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import TimelineRoundedIcon from '@material-ui/icons/TimelineRounded';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import PetsIcon from '@material-ui/icons/Pets';
import AssignmentIcon from '@material-ui/icons/Assignment';
import OutdoorGrillRoundedIcon from '@material-ui/icons/OutdoorGrillRounded';
import LocalShippingRoundedIcon from '@material-ui/icons/LocalShippingRounded';
import SettingsRoundedIcon from '@material-ui/icons/SettingsRounded';
import {Button} from '@material-ui/core'
import empty_user from '../assets/img/empty_user.jpg';

const img_user = '';
const useStyles = makeStyles(()=>({
    root:{
        flexGrow: 1,
        padding: '20px',
        background: '#fff'
    },
    button: {
        background: '#fff',
        textTransform: 'unset'
    },
    textColor:{
        color:'#800080'
    },
    textName:{
        textAlign:'center',
        color: '#00458c'
    },
    imagen:{
        borderRadius: '50%',
        backgroundColor: '#ffffff',
        textAlign: 'center'
        
    }
    }));


    function Menu() {
        const classes = useStyles();
        return (
            <div className={classes.root}>
                <div>
                    <div className={classes.imagen}>
                        
                        <img className={classes.imagen} src={img_user===''?(empty_user):(img_user)} alt="" width="60px" height="60px" />
                    </div>
                    <h2 className={classes.textName}>Carlo Andrés</h2>
                </div>

                <div>
                <Button
                    className={classes.button}
                    startIcon={<TimelineRoundedIcon />}
                    href='/'>
                    <h4 className={classes.textColor}>Dashboard</h4>
                </Button>

                </div>

                <div>
                <Button
                    className={classes.button}
                    startIcon={<PeopleAltIcon />} 
                    href='/Clientes'>
                    <h4 className={classes.textColor}>Clientes</h4>
                </Button>
                        
                </div>

                <div>
                <Button
                    className={classes.button}
                    startIcon={<PetsIcon />}
                    href='/Mascotas'>
                    <h4 className={classes.textColor}>Mascotas</h4>
                </Button>
                </div>

                <div>
                <Button
                    className={classes.button}
                    startIcon={<AssignmentIcon />}
                    href='/Pedidos'>
                    <h4 className={classes.textColor}>Pedidos</h4>
                </Button>
                   
                </div>
                <div>
                <Button
                    className={classes.button}
                    startIcon={<OutdoorGrillRoundedIcon />}
                    href='/Alimentos'>
                    <h4 className={classes.textColor}>Alimentos</h4>
                </Button>
                </div>

                <div>
                <Button
                    className={classes.button}
                    startIcon={<LocalShippingRoundedIcon />}
                    href='/Proveedores'>
                    <h4 className={classes.textColor}>Proveedores</h4>
                </Button>
                </div>

                <div>
                <Button
                    className={classes.button}
                    startIcon={<SettingsRoundedIcon />}
                    href='/Configuracion'>
                    <h4 className={classes.textColor}>Configuracion</h4>
                </Button>
                </div>
            </div>
        );
    }
    export default Menu;