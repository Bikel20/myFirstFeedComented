import React from 'react'
import ReactDOM from 'react-dom/client'
import {App} from './App.jsx'
// o motivo pelo qual usamos {App} e pq usamos named export na exportação do componente 


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
