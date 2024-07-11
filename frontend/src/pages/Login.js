import React from 'react';
import { Button, Container, Typography } from '@mui/material';

const useStyles = makeStyles((theme) => ({
    root: {
        textAlign: 'center',
    },
    title: {
        marginBottom: theme.spacing(4),
    },
    loginButton: {
        marginTop: theme.spacing(2),
    },
}));

const Login = () => {
    const classes = useStyles();
    return (
        <Container className={`${classes.root} app-container`}>
            <Typography variant="h4" className={classes.title}>Login with Spotify</Typography>
            <Button
                variant="contained"
                color="primary"
                className={classes.loginButton}
                href="http://localhost:5000/auth/spotify"
            >
                Login with Spotify
            </Button>
        </Container>
    );
};

export default Login;
