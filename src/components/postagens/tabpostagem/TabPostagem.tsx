import { TabContext, TabPanel } from '@material-ui/lab';
import { AppBar, Tabs, Tab, Box, Typography } from '@mui/material';
import React, {useState} from 'react';
import ListaPostagem from '../listaPostagem/ListaPostagem';
import './TabPostagem.css';

function TabPostagem() {

    const [value, setValue] = useState('1');


    function handleChange(event: React.ChangeEvent<{}>, newValue: string) {
    setValue(newValue);
    }

    return (
        <>
            <TabContext value={value}>
                <AppBar position="static">
                    <Tabs centered indicatorColor="secondary" className='tabpostagens' onChange={handleChange}>
                        <Tab label="Todas as postagens" value="1" className='tabPostagem' />
                        <Tab label="Sobre-nós" value="2" className='tabPostagem' />
                    </Tabs>
                </AppBar>

                <TabPanel value="1">
                    <Box display="flex" flexWrap="wrap" justifyContent="center" className='boxPostagem'>
                        <div className='containerPostagens'>
                            <ListaPostagem />
                        </div>
                    </Box>
                </TabPanel>

                <TabPanel value="2">
                    <Typography
                        variant="h5"
                        gutterBottom
                        color="textPrimary"
                        component="h5"
                        align="center"
                        className="tituloSobre"
                    >
                        Sobre-nós
                    </Typography>
                    <Typography
                        variant="body1"
                        gutterBottom
                        color="textPrimary"
                        align="justify"
                    >
                        texto aqui
                    </Typography>
                </TabPanel>
            </TabContext>
        </>
    );
}

export default TabPostagem;