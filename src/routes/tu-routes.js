import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Home } from '../pages/home/home';
import { NotFoundPage } from '../pages/not-found-page/not-found-page';

function TuRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Home />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export { TuRoutes }
