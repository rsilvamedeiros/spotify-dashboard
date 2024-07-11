import React from 'react';
import { hydrate } from 'react-dom';
import { ThemeProvider } from '@mui/material/styles'; // Update import
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import App from './App';
import theme from './themes/theme';
import './index.css';

const root = document.getElementById('root');

hydrate(
    <Provider store={store}>
        <ThemeProvider theme={theme}>
            <Router>
                <App />
            </Router>
        </ThemeProvider>
    </Provider>,
    root
);
