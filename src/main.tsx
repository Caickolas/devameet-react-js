import React from 'react'
import ReactDOM from 'react-dom/client'
import { Login } from './views/Login'

import {RouterProvider} from 'react-router-dom'
import {router} from './router'
import './assets/styles/global.scss';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Login />
    <RouterProvider router={router}/>
  </React.StrictMode>,
)