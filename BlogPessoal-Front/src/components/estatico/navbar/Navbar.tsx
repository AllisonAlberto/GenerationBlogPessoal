import react from 'react';
import './Navbar.css';
import { Grid, Box, Typography, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import TheatersOutlinedIcon from '@mui/icons-material/TheatersOutlined';
import { useHistory } from 'react-router';
import useLocalStorage from 'react-use-localstorage';

function Navbar(){
    const [token, setToken] = useLocalStorage('token')
    let history = useHistory();

    function goLogout(){
        setToken('')
        alert("Usuário deslogado")
        history.push('/login')
    }

    return(
        <>
        <Grid container className="coloracaoNavbar">
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
                            <Button variant="text" className="buttonColor">Log in</Button>
                        </Link>
                    </Box>
                    <Box className="buttonPadding" onClick={goLogout}>
                        <Button variant="text" className="buttonColor">Log Out</Button>
                    </Box>
                </Box>
            </Grid>
        </Grid>
        </>
    );
}

export default Navbar;