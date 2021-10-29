import React from "react";
import { Box, Button, TextField } from "@material-ui/core";
import "./Contato.css";

function Contato () {
    return (
        <>
            <Box className = "container">
                <h1>Contato</h1>
                <form className = "container">
                    <TextField id = "nome" label = "Nome" variant = "outlined"/>
                    <TextField id = "email" label = "E-mail" type = "email" variant="outlined"/>
                    <TextField id = "assunto" label="Assunto" multiline rows={8} variant="outlined"/>
                    <Button variant="contained" color="secondary" style = {{width: "20%"}}>Enviar</Button>
                </form>
            </Box>
        </>
    );
}

export default Contato;