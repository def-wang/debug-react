// import React from 'react';
// import ReactDOM from 'react-dom';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// console.log(App, 'app', App())
const rootInstance =  ReactDOM.render(
  // <React.StrictMode>
    <App />,
  // </React.StrictMode>,

    document.getElementById('root')
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
