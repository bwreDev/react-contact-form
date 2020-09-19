import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const options = {
  position: 'top center',
  timeout: 6000,
  offset: '30px',
  transition: 'scale',
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
