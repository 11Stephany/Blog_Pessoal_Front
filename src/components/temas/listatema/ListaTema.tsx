import './ListaTema.css';
import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

import {
    Box,
    Button,
    Card,
    CardActions,
    CardContent,
    Typography
} from '@mui/material';
import { busca } from '../../../service/Service';
import { useSelector } from 'react-redux';
/*import { TokenState } from '../../../store/tokens/tokensReducer';*/
import useLocalStorage from 'react-use-localstorage';
import Tema from '../../../models/Tema';


function ListaTema() {

    const [tema, setTema] = useState<Tema[]>([])

    const [token, setToken] = useLocalStorage('token');

    let history = useNavigate()

    useEffect(() => {
        if (token === '') {
            alert('Você precisa estar logado para acessar')
            history('/login')
        }
    }, [token])

    async function buscaTema() {
        await busca("/tema", setTema, {
            headers: {
                'Authorization': token
            }
        })
    }
    useEffect(() => {
        buscaTema()
    }, [tema.length])

    return (
        <>
            {
                tema.map(tema => (
                    <Box m={2}>
                        <Card variant="outlined">
                            <CardContent>
                                <Typography color="textSecondary" gutterBottom>
                                    Tema
                                </Typography>

                                <Typography variant="h5" component="h2">
                                    {tema.descricao}
                                </Typography>
                            </CardContent>

                            <CardActions>
                                <Box display="flex" justifyContent="center" mb={1.5}>
                                    <Link to={`/formularioTema/${tema.id}`} className="text-decorator-none">
                                        <Box mx={1}>
                                            <Button variant="contained" className="marginLeft" size="small" color="primary" >
                                                Atualizar
                                            </Button>
                                        </Box>
                                    </Link>

                                    <Link to={`/deletarTema/${tema.id}`} className="text-decorator-none">
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