import React from 'react'
import { BrowserRouter , Routes, Route } from "react-router-dom";
import App from '../components/App'

import { AppDetailPokemon } from "../components/AppDetailPokemon";

export const AppRouter = () => {
  return (
    <BrowserRouter>
        <Routes>
    

          <Route path="/" element={<App />} />
          <Route  path="/detail/:id" element={<AppDetailPokemon />} />

     
   
        </Routes>
    
    </BrowserRouter>
  );
};
//<Route path="*" element={<NotFoundPage />} />