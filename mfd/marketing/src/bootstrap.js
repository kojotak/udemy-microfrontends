import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
// mount function + 2 scenarios: standalone and hosted in container

const mount = (el) =>{
    ReactDOM.render(
      <App />,
      el  
    );
};

//runnning standalone
if(process.env.NODE_ENV === 'development'){
    const devRoot = document.querySelector('#_marketing-dev-root');
    if(devRoot){
        mount(devRoot);
    }
}

//runinng in container
export {mount};