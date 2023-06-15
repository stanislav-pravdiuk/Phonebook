import { NavLink } from "react-router-dom/dist";
import { useSelector } from "react-redux";
import AppBar from '@mui/material/AppBar';
import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
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
                ? <NavLink style={{ color: 'inherit', textDecoration: 'none',}} to='/profile'>{profile.name}</NavLink>
                : <NavLink style={{ color: 'inherit', textDecoration: 'none',}} to='/login'>Sign in</NavLink>
            }
            {!profile && <NavLink style={{ color: 'inherit', textDecoration: 'none',}} to='/register'>Sign up</NavLink>}                
            </Typography>
        </Toolbar>
                </AppBar>
    </ThemeProvider>
</header>
    )
};

export default Header;