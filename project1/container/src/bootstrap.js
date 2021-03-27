import { mount as mountProducts } from 'products/ProductsIndex'
import { mount as mountCart } from 'cart/CartShow'

console.log('container...');

//propojime
mountProducts( //najdeme v index.html v containeru, kam se maji produkty napojit
    document.querySelector('#my-products')
);

mountCart( //najdeme v index.html v containeru, kam se maji produkty napojit
    document.querySelector('#my-cart')
);