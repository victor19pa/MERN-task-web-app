import React from "react";
import ProyectoState from "./context/Proyectos/ProyectoState";
import TareaState from "./context/Tareas/TareaState";
import AppRouter from "./routes/AppRouter";

const App = () => {
  return (
    <ProyectoState>
      <TareaState>
        <AppRouter />
      </TareaState>
    </ProyectoState>
  );
};

export default App;
