import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';
import { getUser, logout } from '../redux/actions/authActions';
import { Button, Typography, Container, CircularProgress } from '@material-ui/core';

const Dashboard = () => {
    const dispatch = useDispatch();
    const { user, isAuthenticated } = useSelector((state) => state.auth);
    const history = useHistory();
    const location = useLocation();

    useEffect(() => {
        const token = new URLSearchParams(location.search).get('token');
        if (token) {
            localStorage.setItem('token', token);
            history.replace('/dashboard');
        }
        if (localStorage.getItem('token')) {
            dispatch(getUser(localStorage.getItem('token')));
        }
    }, [dispatch, history, location]);

    const handleLogout = () => {
        dispatch(logout());
        localStorage.removeItem('token');
        history.push('/');
    };

    if (!isAuthenticated) {
        return (
            <Container>
                <CircularProgress />
            </Container>
        );
    }

    return (
        <Container>
            <Typography variant="h4">Spotify Dashboard</Typography>
            {user && (
                <div>
                    <Typography variant="h6">Bem-vindo, {user.displayName}</Typography>
                    <Button variant="contained" color="primary" onClick={handleLogout}>
                        Logout
                    </Button>
                </div>
            )}
        </Container>
    );
};

export default Dashboard;
