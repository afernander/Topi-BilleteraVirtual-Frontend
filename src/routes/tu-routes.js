import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Register } from '../pages/log/register/register';
import { Login } from '../pages/log/login/login';
import { Home } from '../pages/log/home/home';

import { NotFoundPage } from '../pages/not-found-page/not-found-page';
import { Welcome } from '../pages/welcome/welcome';
import { Historical } from '../pages/historical/historical';
import { Payment } from '../pages/payment/payment';
import { Charges } from '../pages/charges/charges';
import { DestinarGastos } from '../pages/destinar-gastos/destinar-gastos';
import { Code } from '../pages/code/code';
import { Info } from '../pages/info/info';



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
        <Route path="/payment" element={<Payment />} />
        <Route path="/recargas" element={<Charges />} />
        <Route path="/destinarGastos" element={<DestinarGastos />} />
        <Route path="/code" element={<Code />} />
        <Route path="/info" element={<Info />} />
      </Routes>
    </BrowserRouter>
  )
}

export { TuRoutes }
