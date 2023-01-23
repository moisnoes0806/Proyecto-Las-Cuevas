import React from 'react'
import { Route, Routes } from "react-router-dom";
import App from '../App';
import Content from '../views/content';
import SaleOfDemijohns from '../views/saleOfDemijohns'
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
      </Route>
    </Routes>
  )
}

export default Router