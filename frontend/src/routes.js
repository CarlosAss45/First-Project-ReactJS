import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import { isAuthenticated } from './services/auth';

import Main from './pages/Main/index';
import Contato from './pages/Contato/index';
import Login from './pages/Login/index';
import Register from './pages/Register/index'

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route 
        {...rest}
        render={props => isAuthenticated() ? (<Component {...props} />
        ) : (
            <Redirect to={{pathname: "/login", state: { from: props.location } }} />
        )
    }
    />
)

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Main} />
                <PrivateRoute path="/contato" component={Contato} />
                <Route path="/login" component={Login} />
                <Route path="/register" component={Register} />
            </Switch>
        </BrowserRouter>
    )
}