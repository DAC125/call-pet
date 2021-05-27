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
                </Toolbar>
            </AppBar>
        </div>
    );
}
export default Navbar;