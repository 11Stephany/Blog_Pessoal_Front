import { Box, Button, Grid, TextField } from '@mui/material';
import React, { ChangeEvent, useState, useEffect } from 'react';
import './CadastroUsuario.css';
import { Typography } from '@material-ui/core';
import { Link, useNavigate } from 'react-router-dom';
import User from '../../models/User';
import { cadastroUsuario } from '../../service/Service';


function CadastroUsuario() {

    let history = useNavigate();

    const [confirmarSenha, setConfirmarSenha] = useState<string>('');

    function confirmarSenhaHandle(e: ChangeEvent<HTMLInputElement>) {
        setConfirmarSenha(e.target.value);
    }

    const [user, setUser] = useState<User>({
        id: 0,
        nome: '',
        usuario: '',
        senha: '',
        foto: '',
    });

    const [userResult, setUserResult] = useState<User>({
        id: 0,
        nome: '',
        usuario: '',
        senha: '',
        foto: '',
    });

    function updateModel(event: ChangeEvent<HTMLInputElement>) {
        setUser({
            ...user,
            [event.target.name]: event.target.value,
        });
    }

    async function cadastrar(event: ChangeEvent<HTMLFormElement>) {
        event.preventDefault();

        if (confirmarSenha === user.senha && user.senha.length >= 3) {

            try {
                await cadastroUsuario('/usuarios/cadastrar', user, setUserResult);
                alert('Usuário cadastrado com sucesso'); 
            } catch (error) {
                alert('Falha interna ao cadastrar'); 
            }
        } else {
            alert('As senhas não conferem. Favor verificar novamente');
            setUser({ ...user, senha: '' }); 
            setConfirmarSenha('');
        }
    }

    useEffect(() => {
        if (userResult.id !== 0) {
            history('/login');
        }
    }, [userResult]);

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