import React from "react";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import { Login, NuevaCuenta } from "../components/auth";
import Proyectos from "../components/proyectos/Proyectos";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/nueva-cuenta" element={<NuevaCuenta />} />
        <Route path="/proyectos" element={<Proyectos />} />

        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
