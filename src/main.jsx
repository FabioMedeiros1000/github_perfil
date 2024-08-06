import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import './global.css'

// import { PI as numeroPi, GTM_BRASIL } from './teste'
// // Aqui, nomes poderia ser substituído por qualquer coisa, pois a exportação foi com default
// import nomes from './nomes.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
