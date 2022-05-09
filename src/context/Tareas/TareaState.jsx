import React, { useReducer } from "react";
import {
  AGREGAR_TAREA,
  ELIMINAR_TAREA,
  TAREAS_PROYECTO,
  VALIDAR_TAREA,
} from "../../types";
import TareaContext from "./TareaContext";
import TareaReducer from "./TareaReducer";

const TareaState = (props) => {
  const initialStte = {
    tareas: [
      { nombre: "Uno", estado: false, id: 1, proyectoId: 1 },
      { nombre: "Dos", estado: true, id: 2, proyectoId: 2 },
      { nombre: "Tres", estado: false, id: 3, proyectoId: 3 },
      { nombre: "Cuatro", estado: true, id: 4, proyectoId: 4 },
      { nombre: "Uno", estado: false, id: 5, proyectoId: 1 },
      { nombre: "Dos", estado: true, id: 6, proyectoId: 2 },
      { nombre: "Tres", estado: false, id: 7, proyectoId: 3 },
      { nombre: "Cuatro", estado: true, id: 8, proyectoId: 4 },
      { nombre: "Uno", estado: false, id: 9, proyectoId: 1 },
      { nombre: "Cinco", estado: true, id: 10, proyectoId: 5 },
      { nombre: "Seis", estado: false, id: 11, proyectoId: 6 },
      { nombre: "Cinco", estado: true, id: 12, proyectoId: 5 },
    ],
    tareasProyecto: null,
    errorTarea: false,
  };

  const [state, dispatch] = useReducer(TareaReducer, initialStte);

  const obtenerTareas = (proyectoId) => {
    dispatch({
      type: TAREAS_PROYECTO,
      payload: proyectoId,
    });
  };

  const agregarTareas = (tarea) => {
    dispatch({
      type: AGREGAR_TAREA,
      payload: tarea,
    });
  };

  const validarTarea = () => {
    dispatch({
      type: VALIDAR_TAREA,
    });
  };

  const eliminarTarea = (id) => {
    dispatch({
      type: ELIMINAR_TAREA,
      payload: id,
    });
  };

  return (
    <TareaContext.Provider
      value={{
        tareas: state.tareas,
        tareasProyecto: state.tareasProyecto,
        errorTarea: state.errorTarea,
        obtenerTareas,
        agregarTareas,
        validarTarea,
        eliminarTarea,
      }}
    >
      {props.children}
    </TareaContext.Provider>
  );
};

export default TareaState;
