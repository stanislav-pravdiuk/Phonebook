import AppBar from '@mui/material/AppBar';
import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { NavLink } from "react-router-dom/dist";
import { useSelector } from "react-redux";

const defaultTheme = createTheme();

function Header() {

  const { user } = useSelector((state) => state.auth);

  return (
    <header>
      <ThemeProvider theme={defaultTheme}>
        <CssBaseline />
        <AppBar
          position='fixed'
          width='100%'>
          <Toolbar>
            <AccountBoxIcon sx={{ mr: 2 }} />
            <Typography variant="h6" color="inherit" noWrap>
              {user && <NavLink style={{ color: 'inherit', textDecoration: 'none', }} to='/profile'>{user.name}</NavLink>}
              {!user && <NavLink style={{ color: 'inherit', textDecoration: 'none', }} to='/register'>Sign up</NavLink>}
            </Typography>
          </Toolbar>
        </AppBar>
      </ThemeProvider>
    </header>
  );
};

export default Header;