import React from 'react';
import {Toolbar, IconButton, Typography, AppBar} from '@material-ui/core'
import callpet_logo from '../assets/img/top_round_logo_call_pet.svg'
import '../assets/css/components/Navbar.css'


function Navbar() {
    return (
        <div >
            <AppBar position="static" className='navbar'>
                <Toolbar>
                        <div>
                            <img src={callpet_logo} alt="" width="100%" height="100%" />
                        </div>
<<<<<<< HEAD
=======
                        
                    </IconButton>
                    <Typography variant="h6" className='title'>
                        <h1>Call Pet</h1>
                        <h5>Sistema administratrivo</h5>
                    </Typography>
                    
>>>>>>> develop
                </Toolbar>
            </AppBar>
        </div>
    );
}
export default Navbar;