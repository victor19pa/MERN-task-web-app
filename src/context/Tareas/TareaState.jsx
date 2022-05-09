import React, { useReducer } from "react";
import TareaContext from "./TareaContext";
import TareaReducer from "./TareaReducer";

const TareaState = (props) => {
  const initialStte = {
    tareas: [
      { nombre: "Equis", estado: false, id: 1, proyectoId: 1 },
      { nombre: "doses", estado: true, id: 2, proyectoId: 2 },
      { nombre: "tres", estado: false, id: 3, proyectoId: 3 },
      { nombre: "cuatroses", estado: true, id: 4, proyectoId: 4 },
      { nombre: "Equis", estado: false, id: 1, proyectoId: 1 },
      { nombre: "doses", estado: true, id: 2, proyectoId: 2 },
      { nombre: "tres", estado: false, id: 3, proyectoId: 3 },
      { nombre: "cuatroses", estado: true, id: 4, proyectoId: 4 },
      { nombre: "Equis", estado: false, id: 1, proyectoId: 3 },
      { nombre: "doses", estado: true, id: 2, proyectoId: 1 },
      { nombre: "tres", estado: false, id: 3, proyectoId: 4 },
      { nombre: "cuatroses", estado: true, id: 4, proyectoId: 2 },
    ],
  };

  const [state, dispatch] = useReducer(TareaReducer, initialStte);

  return (
    <TareaContext.Provider
      value={{
        tareas: state.tareas,
      }}
    >
      {props.children}
    </TareaContext.Provider>
  );
};

export default TareaState;
