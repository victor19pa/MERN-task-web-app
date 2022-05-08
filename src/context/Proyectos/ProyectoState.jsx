import React, { useReducer } from "react";
import ProyectoContext from "./ProyectoContext";
import ProyectoReducer from "./ProyectoReducer";
import { FORMULARIO_PROYECTO } from "../../types";

const ProyectoState = (props) => {
  const initialState = {
    formulario: false,
  };

  //crear dispatch para ejecutar acciones
  const [state, dispatch] = useReducer(ProyectoReducer, initialState);

  //funciones para CRUD
  const mostrarFormulario = () => {
    dispatch({
      type: FORMULARIO_PROYECTO,
    });
  };

  return (
    <ProyectoContext.Provider
      value={{
        formulario: state.formulario,
        mostrarFormulario,
      }}
    >
      {props.children}
    </ProyectoContext.Provider>
  );
};

export default ProyectoState;
