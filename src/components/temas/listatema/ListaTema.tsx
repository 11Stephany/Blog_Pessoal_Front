
import './ListaTemas.css';
import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect, ChangeEvent } from 'react';
import { Box, Button, Card, CardActions, CardContent, Typography, InputBase } from '@mui/material';
import SearchIcon from '@material-ui/icons/Search';
import { busca } from '../../../service/Service';
import Tema from '../../../models/Tema';
import useLocalStorage from 'react-use-localstorage';


function ListaTema() {

    const [temas, serTemas] = useState<Tema[]>([])

    const [token, setToken] = useLocalStorage('token')

    let history = useNavigate()

    let history = useNavigate()
    useEffect(() => {
        if (token === '') {
            alert('Você precisa estar logado para acessar')
            history('/login')
        }
    }, [token])

    async function buscaTema() {
        await busca("/tema", serTemas, {
            headers: {
                'Authorization': token
            }
        })
    }
    useEffect(() => {
        buscaTema()
    }, [temas.length])

    return (
        <>
            {
                temas.map(temas =>(
                    <Box m={2}>
                        <Card variant="outlined">
                            <CardContent>
                                <Typography color="textSecondary" gutterBottom>
                                    Tema
                                </Typography>

                                <Typography variant="h5" component="h2">
                                    Minha descrição
                                </Typography>
                            </CardContent>

                            <CardActions>
                                <Box display="flex" justifyContent="center" mb={1.5}>
                                    <Link to={`/formularioTema/${temas.id}`} className="text-decorator-none">
                                        <Box mx={1}>
                                            <Button variant="contained" className="marginLeft" size="small" color="primary" >
                                                Atualizar
                                            </Button>
                                        </Box>
                                    </Link>

                                    <Link to={`/formularioTema/${temas.id}`} className="text-decorator-none">
                                        <Box mx={1}>
                                            <Button variant="contained" size="small" color="secondary">
                                                Deletar
                                            </Button>
                                        </Box>
                                    </Link>
                                </Box>
                            </CardActions>
                        </Card>
                    </Box>
                ))
            }
        </>
    );
}

export default ListaTema;