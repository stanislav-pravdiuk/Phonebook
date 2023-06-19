import { LinearProgress } from "@mui/material";
import { createTheme, ThemeProvider } from '@mui/material/styles';

const defaultTheme = createTheme();

function Loader() {
    return (
        <ThemeProvider theme={defaultTheme}>
            <LinearProgress variant="determinate" value={50} />
        </ThemeProvider>
        
        )
    };

export default Loader;