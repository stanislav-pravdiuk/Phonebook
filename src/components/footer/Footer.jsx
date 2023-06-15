import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';

function Copyright() {
    return (
    <Typography variant="body2" color="text.secondary" align="center">
        {'Copyright © '}
            <Link color="inherit" href="https://github.com/stanislav-pravdiuk/goit-react-hw-08-phonebook">
                Stanislav Pravdiuk
            </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
    </Typography>
    );
}

const defaultTheme = createTheme();

function Footer() {
    return (
        <ThemeProvider theme={defaultTheme}>
            <CssBaseline />
            <Box sx={{
                bgcolor: 'background.paper',
                p: 2,
                position: 'fixed',
                bottom: 0,
                width: '100%',
            }} component="footer">
                <Copyright />
            </Box>
        </ThemeProvider>
    );
};

export default Footer;