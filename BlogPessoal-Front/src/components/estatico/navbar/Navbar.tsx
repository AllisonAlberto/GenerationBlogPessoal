import react from 'react';
import './Navbar.css';
import { Grid, Box, Typography, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import TheatersOutlinedIcon from '@mui/icons-material/TheatersOutlined';
import { useHistory } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';
import { addToken } from '../../../store/tokens/actions';
import { toast } from 'react-toastify';

function Navbar(){
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );
    let history = useHistory();
    const dispatch = useDispatch();

    function goLogout(){
        dispatch(addToken(''))
        toast.info('Usuário deslogado', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            theme: "colored",
            progress: undefined,
        })
        history.push('/login')
    }

    var navbarComponet;

    if(token != ''){
        navbarComponet = <Grid container className="coloracaoNavbar">
        <Grid item  xs={6}>
            <Box sx={{ display: "flex", justifyContent: 'space-between', alignItems: "center"}}>
                <TheatersOutlinedIcon/>
                <Link to='/home' className="texteDecoration">
                    <Typography variant="h6" className="typographyConf">Home</Typography>
                </Link>
                <Link to='/posts' className="texteDecoration">
                    <Typography variant="h6" className="typographyConf">Postagens</Typography>
                </Link>
                <Link to='/temas' className="texteDecoration">
                    <Typography variant="h6" className="typographyConf">Temas</Typography>
                </Link>
                <Link to='/formulariopostagem' className="texteDecoration">
                    <Typography variant="h6" className="typographyConf">Cadastrar Postagens</Typography>
                </Link>
                <Link to='/formulariotema' className="texteDecoration">
                    <Typography variant="h6" className="typographyConf">Cadastrar Temas</Typography>
                </Link>
            </Box>
        </Grid>
        <Grid item xs={6} >
            <Box sx={{ display: "flex", justifyContent: "flex-end"}}>
                <Box className="buttonPadding">
                    <Link to='/login'>
                        <Button variant="text" className="buttonColorNavbar texteDecoration">Log in</Button>
                    </Link>
                </Box>
                <Box className="buttonPadding" onClick={goLogout}>
                    <Button variant="text" className="buttonColorNavbar texteDecoration">Log Out</Button>
                </Box>
            </Box>
        </Grid>
    </Grid>
    }

    return(
        <>
            {navbarComponet}
        </>
    );
}

export default Navbar;