import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './auth/login/Login';
import Auth from './auth/Auth';
import ProtectedRoute from './util/ProtectedRoute';
import Home from './portal/home/Home';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/auth' element={<Auth />}>
          <Route path='/login' element={<Login />}></Route>
        </Route>
        <Route path='/' element={<App />}>
          <Route path='' element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
