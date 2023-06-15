import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { getFilteredContacts } from "redux/selectors";
import { deleteContactThunk } from "services/thunk";
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const defaultTheme = createTheme();

function ContactList() {

        const dispatch = useDispatch();
        const contacts = useSelector(getFilteredContacts);

        if (contacts.length !== 0) {
                return (
        <ThemeProvider theme={defaultTheme}>
                <CssBaseline />
                <Container sx={{ py: 8 }} maxWidth="md">
                        <Grid container spacing={4}>
                                {contacts.map((el) => (
                                        <Grid item key={el.id} xs={12} sm={6} md={4}>
                                                <Card
                                                        sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                                                >
                                                <CardMedia
                                                        component="div"
                                                        sx={{
                                                                pt: '56.25%',
                                                        }}
                                                        image="https://source.unsplash.com/random?wallpapers"
                                                />
                                                <CardContent sx={{ flexGrow: 1 }}>
                                                        <Typography gutterBottom variant="h5" component="h2">
                                                                {el.name}
                                                        </Typography>
                                                        <Typography>
                                                                {el.number}
                                                        </Typography>
                                                </CardContent>
                                                <CardActions>
                                                        <Button size="small" onClick={
                                                                () => dispatch(deleteContactThunk(el.id))}>
                                                                Delete
                                                        </Button>
                                                </CardActions>
                                                </Card>
                                        </Grid>
                                ))}
                        </Grid>
                </Container>
        </ThemeProvider>
                );
        };

        return <p>No contacts found</p>
};

export default ContactList;