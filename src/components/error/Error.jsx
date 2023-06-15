import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Box } from "@mui/material";

const defaultTheme = createTheme();

function Error(error) {
    return (
        <ThemeProvider theme={defaultTheme}>
            <Box
                sx={{
                    bgcolor: 'background.paper',
                    pt: 8,
                    pb: 6,
                }}
            >
                <Typography variant="h5" align="center" color="text.secondary" paragraph>
                    {error}
                </Typography>
            </Box>
        </ThemeProvider>
    );
};

export default Error;