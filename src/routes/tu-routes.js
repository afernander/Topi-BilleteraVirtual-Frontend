import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Login } from '../pages/log/login';
import { NotFoundPage } from '../pages/not-found-page/not-found-page';
import { Home } from '../pages/home/home';

function TuRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export { TuRoutes }
