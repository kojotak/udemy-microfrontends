const { merge } = require ('webpack-merge'); //umi mergovat webpack configurace
const HtmlWebpackPlugin = require('html-webpack-plugin');
const commonConfig = require('./webpack.common');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

const devConfig ={
    mode: 'development',
    devServer:{
        port: 8080,
        historyApiFallback:{
            index: 'index.html',
        }
    },
    plugins:[
        new ModuleFederationPlugin({
            name:'container', //useless for container
            remotes:{
                marketing:'marketing@http://localhost:8081/remoteEntry.js',
            },         
        }),
        new HtmlWebpackPlugin({
            template:'./public/index.html'
        })
    ]
};

module.exports = merge(commonConfig, devConfig);