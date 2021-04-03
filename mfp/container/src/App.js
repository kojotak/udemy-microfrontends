import React from 'react';
import MarketingApp from './components/MarketingApp';
import AuthApp from './components/Auth';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import {StylesProvider, createGenerateClassName } from '@material-ui/core/styles';

const generateClassName = createGenerateClassName({
    productionPrefix: 'co' //co=container
});

export default () => {
    return( //BrowserRouter resi i historii v browseru
    <BrowserRouter>
        <StylesProvider generateClassName={generateClassName}>
            <div>
                <Header />
                <hr/>
                <Switch>
                    <Route path="/auth" component={AuthApp} />
                    <Route path="/" component={MarketingApp} />
                </Switch>
            </div>
        </StylesProvider>
    </BrowserRouter>)
};

