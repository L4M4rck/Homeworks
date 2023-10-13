import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { AddCategory } from './components/AddCategory'
import { GifGrid } from './components/GifGrid'
import FirstApp from './FirstApp'
import { GiftExpertApp } from './GiftExpertApp'
import { TodoApp } from './components/TodoApp'





ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <GiftExpertApp />
    <FirstApp />
    <TodoApp />
    
    


  </React.StrictMode>,
)
