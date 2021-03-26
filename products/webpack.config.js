const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
  mode: 'development',
  devServer: {
    port: 8081,
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'products',
      filename: 'remoteEntry.js',
      exposes: {
          //premapovani kvuli moznym kolizim nazvu typu index.js, umoznuje delat aliasy
        './ProductsIndex': './src/bootstrap', 
      },
      shared: {
          faker: {
              //rikame, ze chceme pouze jednu verzi
              singleton: true,
          }
      }
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
};