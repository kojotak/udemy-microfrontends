import React from 'react';
import MarketingApp from './components/MarketingApp';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import {StylesProvider, createGenerateClassName } from '@material-ui/core/styles';

const generateClassName = createGenerateClassName({
    productionPrefix: 'co' //co=container
});

export default () => {
    return(
    <BrowserRouter generateClassName={generateClassName}>
        <div>
            <Header />
            <hr/>
            <MarketingApp/>
        </div>
    </BrowserRouter>)
};

