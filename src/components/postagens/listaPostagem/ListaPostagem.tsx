import './ListaPostagem.css';
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
import Postagem from '../../../models/Postagem';


function ListaPostagem() {

    const [posts, setPosts] = useState<Postagem[]>([])
    const [token, setToken] = useLocalStorage('token');
    let navigate = useNavigate();

    useEffect(() => {
        if (token === "") {
            alert("Você precisa estar logado")
            navigate("/login")

        }
    }, [token])

    async function getPost() {
        await busca("/posts", setPosts, {
            headers: {
                'Authorization': token
            }
        })
    }

    useEffect(() => {

        getPost()

    }, [posts.length])

    return (
        <>
            {
                posts.map(post => (
                    <Box m={2} >
                        <Card variant="outlined">
                            <CardContent>
                                <Typography color="textSecondary" gutterBottom>
                                    Postagens
                                </Typography>
                                <Typography variant="h5" component="h2">
                                    {post.titulo}
                                </Typography>
                                <Typography variant="body2" component="p">
                                    {post.texto}
                                </Typography>
                                <Typography variant="body2" component="p">
                                    {post.tema?.descricao}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Box display="flex" justifyContent="center" mb={1.5}>

                                    <Link to={`/formularioPostagem/${post.id}`} className="text-decorator-none" >
                                        <Box mx={1}>
                                            <Button variant="contained" className="marginLeft" size='small' color="primary" >
                                                atualizar
                                            </Button>
                                        </Box>
                                    </Link>
                                    <Link to={`/deletarPostagem/${post.id}`} className="text-decorator-none">
                                        <Box mx={1}>
                                            <Button variant="contained" size='small' color="secondary">
                                                deletar
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
    )
}

export default ListaPostagem;