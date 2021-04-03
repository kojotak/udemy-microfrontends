import React, {lazy, Suspense} from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import {StylesProvider, createGenerateClassName } from '@material-ui/core/styles';

const MarketingLazy = lazy( ()=> import('./components/MarketingApp'));
const AuthLazy = lazy( ()=> import('./components/AuthApp'));

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
                <Suspense fallback={<div>loading...</div>}>
                    <Switch>
                        <Route path="/auth" component={AuthLazy} />
                        <Route path="/" component={MarketingLazy} />
                    </Switch>
                </Suspense>
            </div>
        </StylesProvider>
    </BrowserRouter>)
};

