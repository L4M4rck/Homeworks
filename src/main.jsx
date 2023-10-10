import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import FirstApp from './FirstApp'
import { Suma } from './Suma'




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <FirstApp title= "My First App" />
    <Suma />

  </React.StrictMode>,
)
