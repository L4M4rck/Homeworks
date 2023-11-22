import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { AddCategory } from './components/AddCategory'
import { GifGrid } from './components/GifGrid'
import FirstApp from './FirstApp'
import { GiftExpertApp } from './GiftExpertApp'
import { TodoApp } from './components/TodoApp'
import { UserProvider } from './context/UserContext'
import { AppRoutes } from './components/AppRoutes'





ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserProvider>
      <AppRoutes />
    </UserProvider>
    
    


  </React.StrictMode>,
)
