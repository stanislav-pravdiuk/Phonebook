import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

function NotFound()
{
    return (
        <Container component="main" sx={{ mt: 8, mb: 2, textAlign: 'center', }} maxWidth="sm">
            <Typography variant="body1">contacts not found...</Typography>
        </Container>
    );
};

export default NotFound;