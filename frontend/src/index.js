import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';  // Asegúrate de tener el archivo de estilo básico
import App from './App';  // Importa el componente App
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />  {/* Aquí se renderiza el componente App */}
  </React.StrictMode>
);

reportWebVitals();
