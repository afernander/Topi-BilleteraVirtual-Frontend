import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Register } from '../pages/log/register/register';
import { Login } from '../pages/log/login/login';
import { Home } from '../pages/log/home/home';

import { NotFoundPage } from '../pages/not-found-page/not-found-page';
import { Welcome } from '../pages/welcome/welcome';
import { Historical } from '../pages/historical/historical';



function TuRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/registro" element={<Register />} />
        <Route path="/ingresar" element={<Login />} />


        <Route path="/home" element={<Home />} />
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/historical" element={<Historical />} />
      </Routes>
    </BrowserRouter>
  )
}

export { TuRoutes }
