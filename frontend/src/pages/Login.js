import React from 'react';
import { Button, Container, Typography } from '@material-ui/core';

const Login = () => {
    return (
        <Container>
            <Typography variant="h4">Login with Spotify</Typography>
            <Button
                variant="contained"
                color="primary"
                href="http://localhost:5000/auth/spotify"
            >
                Login with Spotify
            </Button>
        </Container>
    );
};

export default Login;
