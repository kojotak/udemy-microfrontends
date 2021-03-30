import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import { createMemoryHistory } from 'history';

// mount function + 2 scenarios: standalone and hosted in container

const mount = (el) =>{
    //klientske aplikace/moduly nebudou mit oproti containeru BrowserRouter, ale jen Router,
    //takze se o historii musime postarat sami tim, ze ji nasdilime
    const history = createMemoryHistory();

    ReactDOM.render(
      <App history={history} />,
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