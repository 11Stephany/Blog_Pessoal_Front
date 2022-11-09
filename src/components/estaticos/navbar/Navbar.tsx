import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { Box, Grid } from '@mui/material';
import './Navbar.css';

function Navbar() {
    return (
        <>
            <AppBar position="static">
                <Toolbar variant="dense">
                    <Grid container justifyContent="space-between" >
                        <Box style={{ cursor: 'pointer' }}>
                            <Typography variant="h5" color="inherit">
                                Blog Pessoal
                            </Typography>
                        </Box>
                        <Box display="flex" justifyContent="start">
                            <Box mx={1} style={{ cursor: 'pointer' }}>                                
                                    <Typography variant="h6" color="inherit">
                                        Home
                                    </Typography>                              
                            </Box>
                            <Box mx={1} style={{ cursor: 'pointer' }}>                                
                                    <Typography variant="h6" color="inherit">
                                        Postagens
                                    </Typography>                                
                            </Box>
                            <Box mx={1} style={{ cursor: 'pointer' }}>                                
                                    <Typography variant="h6" color="inherit">
                                        Temas
                                    </Typography>                                
                            </Box>
                            <Box mx={1} style={{ cursor: 'pointer' }}>
                                <Typography variant="h6" color="inherit">
                                    Cadastrar tema
                                </Typography>
                            </Box>
                            <Box mx={1} style={{ cursor: 'pointer' }}>                                
                                    <Typography variant="h6" color="inherit">
                                        logout
                                    </Typography>                                
                            </Box>
                        </Box>
                    </Grid>
                </Toolbar>
            </AppBar>
        </>
    );
}

export default Navbar;