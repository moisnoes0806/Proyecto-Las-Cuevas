import React from 'react'
import { Route, Routes } from "react-router-dom";
import App from '../App';
import Content from '../views/content';
import SaleOfDemijohns from '../views/saleOfDemijohns'
import About from '../views/about';
import Ubication from '../views/ubication';
const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<App />}>
        <Route
          path=""
          element={<Content />}
        />
        <Route
          path="ventas-garrafones"
          element={<SaleOfDemijohns />}
        />
        <Route
          path='acerca-de'
          element={<About />}
        />

        <Route
          path='ubicacion'
          element={<Ubication/>}
        />
      </Route>


    </Routes>
  )
}

export default Router