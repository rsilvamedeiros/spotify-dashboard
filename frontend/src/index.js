import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from '@material-ui/core/styles';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import App from './App';
import theme from './themes/theme';
import './index.css';

ReactDOM.render(
    <Provider store={store}>
        <ThemeProvider theme={theme}>
            <Router>
                <App />
            </Router>
        </ThemeProvider>
    </Provider>,
    document.getElementById('root')
);
