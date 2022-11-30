import { Grid, Box, Typography, TextField, Button } from '@mui/material';
import React, { ChangeEvent, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import useLocalStorage from 'react-use-localstorage';
import UserLogin from '../../models/UserLogin';
import { login } from '../../service/Service';
import './Login.css';

function Login() {

    const [userLogin, setUserLogin] = useState<UserLogin>(
        {
            id: 0,
            nome: '',
            usuario: '',
            senha: '',
            foto: '',
            token: '',
        }
    );

    const [respUserLogin, setRespUserLogin] = useState<UserLogin>(
        {
            id: 0,
            nome: '',
            usuario: '',
            senha: '',
            foto: '',
            token: '',
        }
    );

    let history = useNavigate();

    const [token, setToken] = useLocalStorage('token');

    function updatedModel(event: ChangeEvent<HTMLInputElement>) {
        setUserLogin({
            ...userLogin,
            [event.target.name]: event.target.value,
        });
    }

    async function logar(event: ChangeEvent<HTMLFormElement>) {
        event.preventDefault();
        try {
            await login('/usuario/logar', userLogin, setRespUserLogin);
            toast.info('Usuário logado com sucesso', {
                position: "top-right",
                autoClose: 2500,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
        } catch (error) {
            alert('Dados de usuário incorretos');
        }
    }

    useEffect(() => {
        if (token !== '') {
            history('/home');
        }
    }, [token]);

    useEffect(() => {
        if (respUserLogin.token !== '') {
            history('/home')
        }
    }, [respUserLogin.token])

    return (
        <Grid container direction='row' justify-content='center' alignItems='center' >
            <Grid alignItems='center' xs={6}>
                <Box paddingX={20}>
                    <form onSubmit={logar}>
                        <Typography variant='h3' gutterBottom color='textPrimary' component='h3' align='center' className="textos1"> Entrar</Typography>
                        <TextField value={userLogin.usuario} onChange={(event: ChangeEvent<HTMLInputElement>) => updatedModel(event)} id='usuario' label='usuário' variant='outlined' name='usuario' margin='normal' fullWidth />
                        <TextField value={userLogin.senha} onChange={(event: ChangeEvent<HTMLInputElement>) => updatedModel(event)} id='senha' label='senha' variant='outlined' name='senha' margin='normal' type='password' fullWidth />
                        <Box marginTop={2} textAlign='center'>
                            <Button type='submit' variant='contained' color='primary'>
                                Logar
                            </Button>
                        </Box>
                    </form>
                    <Box display='flex' justifyContent='center' marginTop={2}>
                        <Box marginRight={1}>
                            <Typography variant='subtitle1' gutterBottom align='center'>Não tem uma conta?</Typography>
                        </Box>
                        <Link to='/cadastrousuario'>
                            <Typography variant='subtitle1' gutterBottom align='center' className="textos1">Cadastre-se</Typography>
                        </Link>
                    </Box>
                </Box>
            </Grid>
            <Grid xs={6} className="imagem">
            </Grid>
        </Grid>);
}

export default Login;