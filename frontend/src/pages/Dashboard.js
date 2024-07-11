import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';
import { getUser, logout } from '../redux/actions/authActions';
import { Button, Typography, Container, CircularProgress } from '@mui/material';

const useStyles = makeStyles((theme) => ({
    root: {
        textAlign: 'center',
    },
    header: {
        marginBottom: theme.spacing(4),
    },
    userInfo: {
        marginBottom: theme.spacing(2),
    },
    logoutButton: {
        marginTop: theme.spacing(2),
    },
}));

const Dashboard = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const { user, isAuthenticated } = useSelector((state) => state.auth);
    const navigate = useNavigate(); // Alterado aqui
    const location = useLocation();

    useEffect(() => {
        const token = new URLSearchParams(location.search).get('token');
        if (token) {
            localStorage.setItem('token', token);
            navigate('/dashboard', { replace: true }); // Alterado aqui
        }
        if (localStorage.getItem('token')) {
            dispatch(getUser(localStorage.getItem('token')));
        }
    }, [dispatch, navigate, location]); // Alterado aqui

    const handleLogout = () => {
        dispatch(logout());
        localStorage.removeItem('token');
        navigate('/'); // Alterado aqui
    };

    if (!isAuthenticated) {
        return (
            <Container>
                <CircularProgress />
            </Container>
        );
    }

    return (
        <Container className={`${classes.root} app-container`}>
            <Typography variant="h4" className={classes.header}>Spotify Dashboard</Typography>
            {user && (
                <div className={classes.userInfo}>
                    <Typography variant="h6">Bem-vindo, {user.displayName}</Typography>
                    <Button
                        variant="contained"
                        color="primary"
                        className={classes.logoutButton}
                        onClick={handleLogout}
                    >
                        Logout
                    </Button>
                </div>
            )}
        </Container>
    );
};

export default Dashboard;
