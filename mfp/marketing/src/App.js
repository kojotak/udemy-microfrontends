import React from 'react';
import {Switch, Route, Router} from 'react-router-dom';
import {StylesProvider, createGenerateClassName } from '@material-ui/core/styles';
import Pricing from './components/Pricing';
import Landing from './components/Landing';

const  generateClassName = createGenerateClassName({
    productionPrefix:'ma' //ma=marketing, no random prefix, but this one. It will avoid css class name collisions
});

export default (history) => {
    return <div>
        <StylesProvider generateClassName={generateClassName}>
            <Router history={history}>
                <Switch>
                    <Route exact path="/pricing" component={Pricing} />
                    <Route exact path="/" component={Landing} />
                </Switch>
            </Router>
        </StylesProvider>
    </div>
};