import { mount } from 'products/ProductsIndex'
import 'cart/CartShow'

console.log('container...');

//propojime
mount( //najdeme v index.html v containeru, kam se maji produkty napojit
    document.querySelector('#dev-products')
);