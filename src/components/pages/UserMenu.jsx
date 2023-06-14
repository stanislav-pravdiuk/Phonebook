import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom/dist";
import { logOut } from "redux/auth/authSlice";
import { delToken } from "services/instance";
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const defaultTheme = createTheme();

export default function UserMenu() {

    const { profile } = useSelector((state) => state.auth);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    
        const handleLogout = () => {
        dispatch(logOut());
        delToken();
    };

    return (
    <ThemeProvider theme={defaultTheme}>
        <CssBaseline />
        <AppBar position="relative">
        <Toolbar>
            <AccountBoxIcon sx={{ mr: 2 }} />
            <Typography variant="h6" color="inherit" noWrap>
                Profile
            </Typography>
        </Toolbar>
        </AppBar>
        <main>

        <Box
            sx={{
                bgcolor: 'background.paper',
                pt: 8,
                pb: 6,
            }}
        >
            <Container maxWidth="sm">
            <Typography
                component="h1"
                variant="h2"
                align="center"
                color="text.primary"
                gutterBottom
            >{profile.email}
            </Typography>
            <Stack
                sx={{ pt: 4 }}
                direction="row"
                spacing={2}
                justifyContent="center"
            >
                <Button variant="contained" onClick={() => { navigate('/') }}>Phonebook</Button>
                <Button variant="outlined" onClick={handleLogout}>Logout</Button>
            </Stack>
            </Container>
        </Box>
        
        </main>
    </ThemeProvider>
    );
}
