import { createTheme } from '@material-ui/core/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#1DB954', // Spotify Green
        },
        secondary: {
            main: '#191414', // Spotify Black
        },
    },
    typography: {
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
        h4: {
            fontWeight: 600,
            fontSize: '1.8rem',
            marginBottom: '1rem',
        },
        h6: {
            fontWeight: 500,
            fontSize: '1.2rem',
            marginBottom: '0.5rem',
        },
    },
    overrides: {
        MuiButton: {
            root: {
                borderRadius: '50px',
                textTransform: 'none',
                padding: '10px 20px',
            },
        },
        MuiContainer: {
            root: {
                padding: '2rem',
            },
        },
    },
});

export default theme;
