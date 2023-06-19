import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom/dist";
import { logOut } from "redux/auth/operations";

const defaultTheme = createTheme();

export default function UserMenu() {

    const { user } = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
        const handleLogout = () => {
        dispatch(logOut());
        };

    return (
    <ThemeProvider theme={defaultTheme}>
        <main>
        <Box
            sx={{   
                bgcolor: 'background.paper',
                pt: 8,
                pb: 6,
                marginTop: 20,
            }}
        >
        <Container maxWidth="xl">
                        {user && <Typography
                            component="h1"
                            variant="h5"
                            align="center"
                            color="text.primary"
                            gutterBottom
                        >
                            {user.email}
                        </Typography>}
            <Stack
                sx={{ pt: 4 }}
                direction="row"
                spacing={2}
                justifyContent="center"
            >
            <Button variant="contained" onClick={() => { navigate('/contacts') }}>Phonebook</Button>
            <Button variant="outlined" onClick={handleLogout}>Logout</Button>
            </Stack>
        </Container>
        </Box>
        </main>
    </ThemeProvider>
    );
};