import React, { useReducer } from "react";
import ProyectoContext from "./ProyectoContext";
import ProyectoReducer from "./ProyectoReducer";
import { FORMULARIO_PROYECTO, OBTENER_PROYECTO } from "../../types";

const ProyectoState = (props) => {
  const proyectos = [
    { nombre: "Tienda virtual", id: 1 },
    { nombre: "Intranet", id: 2 },
    { nombre: "Diseño sitioweb", id: 3 },
    { nombre: "A virtual", id: 4 },
    { nombre: "B", id: 5 },
    { nombre: "C sitioweb", id: 6 },
  ];
  const initialState = {
    proyectos: [],
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

  const obtenerProyectos = () => {
    dispatch({
      type: OBTENER_PROYECTO,
      payload: proyectos,
    });
  };

  return (
    <ProyectoContext.Provider
      value={{
        proyectos: state.proyectos,
        formulario: state.formulario,
        mostrarFormulario,
        obtenerProyectos,
      }}
    >
      {props.children}
    </ProyectoContext.Provider>
  );
};

export default ProyectoState;
