import react from 'react';
import './Footer.css';
import { Grid, Box, Typography } from '@material-ui/core';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

function Footer(){
    return(
        <>
            <Grid alignItems="center" item xs={12} className="coloracaoFooter">
                <Box display="flex" alignItems="center" justifyContent="center">
                    <Box >
                        <Typography variant="h6" align="center" gutterBottom className="typographyFooter">Siga-me no:  </Typography>
                    </Box>
                    <Box display="flex" alignItems="center" justifyContent="center">
                        <a href="https://www.linkedin.com/in/allisonalberto/" target="_blank"><LinkedInIcon/></a>
                    </Box>
                    <Box display="flex" alignItems="center" justifyContent="center">
                        <a href="https://github.com/AllisonAlberto" target="_blank"><GitHubIcon/></a>
                    </Box>
                </Box>
                <Box display="flex" alignItems="center" justifyContent="center">
                    <Box>
                        <Typography variant="subtitle2" align="center" gutterBottom className="typographyFooter" >© 2020 Copyright:</Typography>
                    </Box>
                    <Box>
                        <a target="_blank" href="https://brasil.generation.org"><Typography variant="subtitle2" gutterBottom className="typographyFooter text-decorator-none" align="center">brasil.generation.org</Typography></a>
                    </Box>
                </Box>
            </Grid>
        </>
    );
}

export default Footer;