import React from 'react';
import {makeStyles} from '@material-ui/core/styles'
import {makeAppBar, Toolbar, IconButton, Typography, AppBar} from '@material-ui/core'
import callpet_logo from '../assets/img/call-pet_logo.png'

const useStyles = makeStyles(()=>({

    root:{
        flexGrow: 1,
    },
    menuButton:{
        marginRight: '16px'
    },
    title:{
        flexGrow: 1
    },
    imagen:{
        borderRadius: '50%',
        padding: '14px 14px 5px 14px',
        backgroundColor: '#ffffff'
    },
    navbar:{
        background: '#800080'
    }
}));

function Navbar() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <AppBar position="static" className={classes.navbar}>
                <Toolbar>
                    <IconButton color="inherit">
                        <div className={classes.imagen}>
                            <img src={callpet_logo} alt="" width="60px" height="60px" />
                        </div>
                        
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        Call - Pet
                    </Typography>
                    
                </Toolbar>
            </AppBar>
        </div>
    );
}
export default Navbar;