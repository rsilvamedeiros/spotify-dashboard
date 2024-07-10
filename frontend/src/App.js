import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';

function App() {
    return (
        <Provider store={store}>
            <Router>
                <Switch>
                    <Route path="/dashboard" component={Dashboard} />
                    <Route path="/" component={Login} />
                </Switch>
            </Router>
        </Provider>
    );
}

export default App;
