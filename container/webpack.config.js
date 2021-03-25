const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
  mode: 'development',
  devServer: {
    port: 8080,
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'container', //nikde se ve skutecnosti nepouziva
      remotes: { //klic v remotes se mapuje na: import 'products/ProductsIndex' v bootstrap.js
        products: 'products@http://localhost:8081/remoteEntry.js', //products pred zavinacem je nazev v webpack configu produktu
        cart: 'cart@http://localhost:8082/remoteEntry.js'
    },
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
};