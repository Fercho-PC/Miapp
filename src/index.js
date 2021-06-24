import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
/*
import App from './App.jsx';
*/
//Estos son mios
import Index from './components/Index';


ReactDOM.render(
  <React.StrictMode>
    {/*Hago uso de fragment para separar los divs y poder darles instrucciones logicas a cada uno*/}
    <Fragment>
      <div>
        {/* Mi index es la pagina principal */}
        <Index />
      </div>
    </Fragment>
  </React.StrictMode>,
  document.getElementById('root')
);