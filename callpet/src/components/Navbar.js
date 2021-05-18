import React from 'react';
import {Toolbar, IconButton, Typography, AppBar} from '@material-ui/core'
import callpet_logo from '../assets/img/call-pet_logo.png'
import '../assets/css/components/Navbar.css'


function Navbar() {
    return (
        <div className='root'>
            <AppBar position="static" className='navbar'>
                <Toolbar>
                    <IconButton color="inherit">
                        <div className='imagen'>
                            <img src={callpet_logo} alt="" width="60px" height="60px" />
                        </div>
                        
                    </IconButton>
                    <Typography variant="h6" className='title'>
                        Call - Pet
                    </Typography>
                    
                </Toolbar>
            </AppBar>
        </div>
    );
}
export default Navbar;