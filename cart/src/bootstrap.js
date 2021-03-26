import faker from 'faker';

const mount = (el) => {
    
    const cartText = `<div>You have ${faker.random.number()} items in cart</div>`;
    
    el.innerHTML = cartText;
};


//vysvetleni viz bootstrap.js z products modulu
if(process.env.NODE_ENV==='development'){
    const el = document.querySelector('#cart-dev');
    if(el){
        mount(el);
    }
}

export {mount};