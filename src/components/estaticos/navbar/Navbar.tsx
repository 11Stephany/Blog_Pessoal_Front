import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { Box, Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    return (
        <>
            <AppBar position="static">
                <Toolbar variant="dense">
                    <Grid container justifyContent="space-between" >
                        <Link to='/' className='text-decorator-none'>
                            <Box className="cursor">
                                <Typography variant="h5" color="inherit">
                                    Blog Pessoal
                                </Typography>
                            </Box>
                        </Link>
                        <Box display="flex" justifyContent="start">
                            <Link to='/' className='text-decorator-none'>
                                <Box mx={1} className="cursor">
                                    <Typography variant="h6" color="inherit">
                                        Home
                                    </Typography>
                                </Box>
                            </Link>
                            <Box mx={1} className="cursor">
                                <Typography variant="h6" color="inherit">
                                    Postagens
                                </Typography>
                            </Box>
                            <Box mx={1} className="cursor">
                                <Typography variant="h6" color="inherit">
                                    Temas
                                </Typography>
                            </Box>
                            <Box mx={1} className="cursor">
                                <Typography variant="h6" color="inherit">
                                    Cadastrar tema
                                </Typography>
                            </Box>
                            <Link to='/login' className='text-decorator-none'>
                                <Box mx={1} className="cursor" >
                                    <Typography variant="h6" color="inherit">
                                        logout
                                    </Typography>
                                </Box>
                            </Link>
                        </Box>
                    </Grid>
                </Toolbar>
            </AppBar>
        </>
    );
}

export default Navbar;