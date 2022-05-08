import React from "react";
import ProyectoState from "./context/Proyectos/ProyectoState";
import AppRouter from "./routes/AppRouter";

const App = () => {
  return (
    <ProyectoState>
      <AppRouter />
    </ProyectoState>
  );
};

export default App;
