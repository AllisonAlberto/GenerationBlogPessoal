import React from "react";
import { Button, Box, Paper } from "@material-ui/core";
import "./Home.css";
import { Height } from "@material-ui/icons";

function Home(){
    return(
        <>
            <Paper>
                <Box p = {2}>
                    <Box display = 'flex' justifyContent = 'center'>
                        <h1 className="titulo">Home</h1>
                    </Box>
                    <img src="https://cdn.discordapp.com/attachments/903702693208539196/903702722786783292/robotic-5714849_960_720.png" 
                    alt="Robo"  className='img' style = {{width: "100%", height: "100%"}}/>
                    <Box display = 'flex' justifyContent = 'center' p = {2}>
                        <Button variant = "contained" color = "primary">Texto 1</Button>
                        <Button variant = "contained" color = "secondary">Texto 2</Button>
                    </Box>
                </Box>
            </Paper>
        </>
    );
}

export default Home;