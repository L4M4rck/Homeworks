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
import { Provider } from 'react'
import { store } from "./store/store";

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
)
