import { Box, Grid, Typography } from '@mui/material';
import React from 'react';
import { FacebookRounded } from '@mui/icons-material';
import { Instagram, LinkedIn } from '@material-ui/icons';
import GitHub from '@mui/icons-material/GitHub'
import './Footer.css';

function Footer() {
    return (
        <>
            <Grid container direction="row" justifyContent="center" alignItems="center">
                <Grid alignItems="center" item xs={12}>
                    <Box className="box1">
                        <Box paddingTop={1} display="flex" alignItems="center" justifyContent="center">
                            <Typography variant="h5" align="center" gutterBottom className="textos" >
                                Siga-nos nas redes sociais{' '}
                            </Typography>
                        </Box>
                        <Box display="flex" alignItems="center" justifyContent="center">
                            <a href="https://www.facebook.com" target="_blank">
                                <FacebookRounded className="redes" />
                            </a>
                            <a href="https://www.instagram.com" target="_blank">
                                <Instagram className="redes"  />
                            </a>
                            <a href="https://www.github.com/tjfaccipieri" target="_blank">
                                <GitHub className="redes"  />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/thiago-faccipieri/"
                                target="_blank"
                            >
                                <LinkedIn className="redes" />
                            </a>
                        </Box>
                    </Box>
                    <Box className="box2" >
                        <Box paddingTop={1}>
                            <Typography variant="subtitle2" align="center" gutterBottom className="textos">
                                © 2022 Copyright:
                            </Typography>
                        </Box>
                        <Box>
                            <a target="_blank" href="https://brasil.generation.org">
                                <Typography variant="subtitle2" gutterBottom className="textos" align="center">
                                    brasil.generation.org
                                </Typography>
                            </a>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </>
    );
}

export default Footer;