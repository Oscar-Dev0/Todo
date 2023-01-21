import React from 'react';
import ReactDOM from 'react-dom/client';
import App from "./web";
import { Provider } from './context/curso';
import "./style/global.css";




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>   
    <Provider>
      <App />
    </Provider>
  </React.StrictMode>

);
