import { NavLink } from "react-router-dom/dist";
import { useSelector } from "react-redux";
import AppBar from '@mui/material/AppBar';
import * as React from 'react';
import Button from '@mui/material/Button';
import CameraIcon from '@mui/icons-material/PhotoCamera';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import AccountBoxIcon from '@mui/icons-material/AccountBox';

const defaultTheme = createTheme();

function Header() {

    const { profile } = useSelector((state) => state.auth);

    return (
        <header>
    <ThemeProvider theme={defaultTheme}>
        <CssBaseline />
        <AppBar position="relative">
        <Toolbar>
            <AccountBoxIcon sx={{ mr: 2 }} />
            <Typography variant="h6" color="inherit" noWrap>
            {profile
                                ? <NavLink style={{ color: 'white', textDecoration: 'none',}} to='/profile'>{profile.name}</NavLink>
                    : <NavLink to='/login'>Sign in</NavLink>
            }
            {!profile && <NavLink to='/register'>Sign up</NavLink>}                
            </Typography>
        </Toolbar>
                </AppBar>
    </ThemeProvider>
                
                

        </header>
    )
};

export default Header;