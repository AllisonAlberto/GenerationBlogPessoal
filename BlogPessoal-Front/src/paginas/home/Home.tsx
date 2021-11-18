import react, { useEffect } from 'react';
import './Home.css';
import { Grid, Box, Typography, Button} from '@material-ui/core';
import { Link, useHistory } from 'react-router-dom';
import TabPostagem from '../../components/postagens/tabpostagem/TabPostagem';
import ModalPostagem from '../../components/postagens/modalpostagem/ModalPostagem';
import { useSelector } from 'react-redux';
import { TokenState } from '../../store/tokens/tokensReducer';
import { toast } from 'react-toastify';

function Home(){
    let history = useHistory();
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );
    
    useEffect(() => {
      if (token == "") {
        toast.error('Você precisa estar logado', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            theme: "colored",
            progress: undefined,
        })
        history.push("/login")
        }
    }, [token])

    return(
        <>
            <Grid container direction="row" alignItems="center" className="coloracaoHome">
                <Grid item xs={6} >
                    <Box display="flex" flexDirection="column">
                        <Typography variant="h2" align="center" className="typographyHome">Seja bem vinde ao CineBlog!</Typography>
                        <Typography variant="h5" align="center" className="typographyHome">Aqui você pode se expressar sobre a setima arte!</Typography>
                    </Box>
                    <Box display="flex" justifyContent="center">
                        <Box marginRight={1}>
                            <ModalPostagem/>
                        </Box>
                        <Link to="/posts" className="texteDecoration">
                            <Button variant="outlined" className="buttonColor">Ver Postagens</Button>
                        </Link>
                    </Box>
                </Grid>
                <Grid item xs={6} className="coloracaoHome">
                    <img src="https://media.discordapp.net/attachments/903702693208539196/910174877246447646/BlogCinema.jpg?width=1052&height=701" alt="imagens de um rolo de ticket de cinema" className="imagem"/>
                </Grid>
                <Grid xs={12} className="postagens">
                    <TabPostagem/>
                </Grid>

            </Grid>
        </>
    );
}

export default Home;