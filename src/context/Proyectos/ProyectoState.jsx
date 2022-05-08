import React, { useReducer } from "react";
import ProyectoContext from "./ProyectoContext";
import ProyectoReducer from "./ProyectoReducer";

const ProyectoState = (props) => {
  const initialState = {
    formulario: false,
  };

  //crear dispatch para ejecutar acciones
  const [state, dispatch] = useReducer(ProyectoReducer, initialState);

  //funciones para CRUD

  return (
    <ProyectoContext.Provider value={{ formulario: state.formulario }}>
      {props.children}
    </ProyectoContext.Provider>
  );
};

export default ProyectoState;
