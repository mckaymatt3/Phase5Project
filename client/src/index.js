import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import * as serviceWorker from "./serviceWorker"
import actionCable from "actioncable";
import { Provider } from "react-redux";
import store from "./redux/store";

const CableApp = {};


CableApp.cable = actionCable.createConsumer("ws://localhost:3000/cable");
// This readys a consumer (think of this as a browser window) that will connect against /cable on your backend server by default. 
// In other words, the client (your front-end) is connect to the cable - through a route you have defined in your backend.

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  // <React.StrictMode>
  <Provider store={store}>
    <BrowserRouter>
      <App cableApp={CableApp}/>
    </BrowserRouter>
  </Provider>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
serviceWorker.unregister();
