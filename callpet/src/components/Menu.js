import React from 'react';
import TimelineRoundedIcon from '@material-ui/icons/TimelineRounded';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import PetsIcon from '@material-ui/icons/Pets';
import AssignmentIcon from '@material-ui/icons/Assignment';
import OutdoorGrillRoundedIcon from '@material-ui/icons/OutdoorGrillRounded';
import LocalShippingRoundedIcon from '@material-ui/icons/LocalShippingRounded';
import SettingsRoundedIcon from '@material-ui/icons/SettingsRounded';
import {Button} from '@material-ui/core'
import empty_user from '../assets/img/empty_user.jpg';
import '../assets/css/components/Menu.css'

const img_user = '';


    function Menu() {
        
        return (
            <div className='root sideBarShadow'>
                <div className='credentials'>
                    <div className='imagen'>
                        
                        <img className='imagen' src={img_user===''?(empty_user):(img_user)} alt=""     width= '100px' height='100px' />
                    </div>
                    <h2 className='textName'>Carlo Andrés</h2>
                </div>

                <div>
                <Button
                    className='button'
                    startIcon={<TimelineRoundedIcon />}
                    href='/'>
                    <h5 className='textColor'>Dashboard</h5>
                </Button>

                </div>

                <div>
                <Button
                    className='button'
                    startIcon={<PeopleAltIcon />} 
                    href='/Clientes'>
                    <h5 className='textColor'>Clientes</h5>
                </Button>
                        
                </div>

                <div>
                <Button
                    className='button'
                    startIcon={<PetsIcon />}
                    href='/Mascotas'>
                    <h5 className='textColor'>Mascotas</h5>
                </Button>
                </div>

                <div>
                <Button
                    className='button'
                    startIcon={<AssignmentIcon />}
                    href='/Pedidos'>
                    <h5 className='textColor'>Pedidos</h5>
                </Button>
                   
                </div>
                <div>
                <Button
                    className='button'
                    startIcon={<OutdoorGrillRoundedIcon />}
                    href='/Alimentos'>
                    <h5 className='textColor'>Alimentos</h5>
                </Button>
                </div>

                <div>
                <Button
                    className='button'
                    startIcon={<LocalShippingRoundedIcon />}
                    
                    href='/Proveedores'>
                    <h5 className='textColor'>Proveedores</h5>
                </Button>
                </div>

                {/**<div>
                <Button
                    className='button'
                    startIcon={<SettingsRoundedIcon />}
                    href='/Configuracion'>
                    <h5 className='textColor'>Configuracion</h5>
                </Button>
                </div>**/}
            </div>
        );
    }
    export default Menu;