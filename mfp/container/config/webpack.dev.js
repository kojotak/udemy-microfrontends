const { merge } = require ('webpack-merge'); //umi mergovat webpack configurace
const commonConfig = require('./webpack.common');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const packageJson = require('../package.json');//object se zavislostma, ktere strcime do shared v ModuleFederationPluginu
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
            shared:packageJson.dependencies,          
        }),
    ]
};

module.exports = merge(commonConfig, devConfig);