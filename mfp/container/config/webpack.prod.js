const { merge } = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const commonConfig = require('./webpack.common');
const packageJson = require('../package.json');

//dynamicky zjisti domenu produkce, protoze ji neznam v compile time pro plugins/remotes 
//tato promenna bude nastavena pri nasazeni
const domain = process.env.PRODUCTION_DOMAIN;

const prodConfig = {
 mode: 'production',
 output:{
     filename: '[name].[contenthash].js',
     publicPath: '/container/latest/',
 },
 plugins:[
     new ModuleFederationPlugin({
        name:'container',
        remotes:{
            //neni apostrof, ale backtick!
            //budeme predpokladat, ze vsechny moduly budou na stejne domene
            marketing:`marketing@${domain}/marketing/remoteEntry.js` 
        },
        shared: packageJson.dependencies,
     }),
 ]
};

module.exports = merge(commonConfig, prodConfig);