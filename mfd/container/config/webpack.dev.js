const { merge } = require ('webpack-merge'); //umi mergovat webpack configurace
const HtmlWebpackPlugin = require('html-webpack-plugin');
const commonConfig = require('./webpack.common');

const devConfig ={
    mode: 'development',
    devServer:{
        port: 8080,
        historyApiFallback:{
            index: 'index.html',
        }
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:'./public/index.html'
        })
    ]
};

module.exports = merge(commonConfig, devConfig);