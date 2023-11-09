import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { useState } from 'react'
import {Menu} from './Menu/Menu'
import { Home } from './Home/Home'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Menu/>
    <Home/>
  </React.StrictMode>,
)
