import React, { useState, useEffect, ChangeEvent } from "react";
import './Login.css'
import { Grid, Box, Typography, TextField, Button } from "@material-ui/core";
import { Link, useHistory } from "react-router-dom";
import useLocalStorage from "react-use-localstorage";
import UserLogin from "../../models/UserLogin";
import { login } from "../../services/Service";

function Login() {

    let history = useHistory();

    const [token, setToken] = useLocalStorage('token')

    const [userLogin, setUserLogin] = useState<UserLogin>(
        {
            id: 0,
            usuario: '',
            senha: '',
            token: ''
        }
    )

    function updateModel(e: ChangeEvent<HTMLInputElement>) {
        
        setUserLogin({
            ...userLogin,
            [e.target.name]: e.target.value
        })
    }

    useEffect(()=>{
        if(token != ''){
            history.push('/home')
        }
    }, [token])

    async function onSubmit(e: ChangeEvent<HTMLFormElement>){
        e.preventDefault();
        try{
            await login(`/usuarios/logar`, userLogin, setToken)

            alert('Usuário logado com sucesso!');
        }catch{
            alert('Dados do usuário inconsistentes. Erro ao logar!');
        }
        
    }

    return (
        <Grid container direction='row' justifyContent='center' alignItems='center' className="coloracaoLogin">
            <Grid item xs={6}>
                <Box paddingX={10}>
                    <form onSubmit={onSubmit}>
                        <Typography variant='h3' gutterBottom component='h3' align='center' style={{fontWeight: 'bold'}} className="typographyLogin">Entrar</Typography>
                        <TextField value={userLogin.usuario} onChange={(e: ChangeEvent<HTMLInputElement>) => updateModel(e)} id='usuario' label='usuário' variant='outlined' name='usuario' margin='normal' fullWidth/>
                        <TextField value={userLogin.senha} onChange={(e: ChangeEvent<HTMLInputElement>) => updateModel(e)} id='senha' label='senha' variant='outlined' name='senha' margin='normal' type='password' fullWidth/>
                        <Box display='flex' justifyContent='center' marginTop={2}>
                            <Box marginRight={1}>
                                <Typography variant='subtitle1' gutterBottom align='center' className="typographyLogin">Não tem uma conta?</Typography>
                            </Box>
                            <Link to='/cadastrousuario'>
                                <Typography variant='subtitle1' gutterBottom align='center' className="cadastreseConf">Cadastre-se</Typography>
                            </Link>
                        </Box>
                        <Box marginTop={2} textAlign='center'>
                                <Button type='submit' variant='outlined'className="buttonColor">
                                    Logar
                                </Button>
                        </Box>
                    </form>
                </Box>
            </Grid>
            <Grid item xs={6}>
                <img src="https://media.discordapp.net/attachments/903702693208539196/910174877246447646/BlogCinema.jpg?width=1052&height=701" 
                alt="imagens de um rolo de ticket de cinema" className="imagem"/>
            </Grid>
        </Grid>
    );
}

export default Login;