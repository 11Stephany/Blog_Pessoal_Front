import { Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { Grid, Box, Button, TextField } from '@mui/material';
import './CadastroUsuario.css';
import React from 'react';


function CadastroUsuario() {
    return (

        <Grid container alignItems="center">
            <Grid item xs={6} className='imagem2'></Grid>
            <Grid item xs={6} display="flex" justifyContent="center">
                <Box paddingX={10}>
                    <Typography variant='h3' gutterBottom color='textPrimary' component='h3' align='center' className="textos2"> Cadastrar</Typography>
                    <form>
                        <TextField id='nome' label='nome' variant='outlined' name='nome' margin='normal' fullWidth />
                        <TextField id='usuario' label='usuário' variant='outlined' name='usuario' margin='normal' fullWidth />
                        <TextField id='senha' label='senha' variant='outlined' name='senha' margin='normal' type='password' fullWidth />
                        <TextField id='confirmarSenha' label='confirmar senha' variant='outlined' name='confirmarSenha' margin='normal' type='password' fullWidth />
                        <Box marginTop={2} textAlign='center'>
                            <Link to='/login' className='text-decorator-none'>
                                <Button variant='contained' color='secondary' className='botaoCancelar'>
                                    Cancelar
                                </Button>
                            </Link>
                            <Button type='submit' variant='contained' color='primary'>
                                Cadastrar
                            </Button>
                        </Box>
                    </form>
                </Box>
            </Grid>
        </Grid>
    );
}

export default CadastroUsuario;