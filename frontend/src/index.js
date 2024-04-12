import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './styles.css'; // Asegúrate de tener un archivo styles.css para tus estilos globales

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);