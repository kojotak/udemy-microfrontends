import faker from  'faker';

const mount = (el) => {
  //pripravi vysledek
  let products ='';

for(let i = 1; i <5; i++){
    const name = faker.commerce.productName();
    products += `<div>${name}</div>`
}

el.innerHTML = products;
//realne bychom zde zavolali react
};

// 1.situation - standalone development
if(process.env.NODE_ENV === 'development') {//kontrola na vyvojovy mod

    //bezime ve standalone rezimu? pozname, zda v nasem index.html je nas element...neni 100% kontrola
    const el = document.querySelector('#dev-products');
    if(el){
        mount(el);//zavolej nasi funkci a predej ji, kam se ma vyrenderovat
    }
}

// 2.situation - running in production in container app. We are not sure, that dev-product div exists!
export  {mount}; //nekdo si funkci muze zavolat, ale my nic renderovat nebudeme