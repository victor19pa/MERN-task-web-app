import React, { useContext } from "react";
import ProyectoContext from "../../context/Proyectos/ProyectoContext";
import Tarea from "./Tarea";

const ListadoTareas = () => {
  const { proyecto, eliminarProyecto } = useContext(ProyectoContext);

  //sino hay proyecto seleccionado
  if (!proyecto) {
    return <h2>Selecciona un proyecto</h2>;
  }
  //array destructuring para extraer actual
  const [proyectoActual] = proyecto;

  const tareasProyecto = [];

  const onClickEliminar = () => {
    eliminarProyecto(proyectoActual.id);
  };
  return (
    <>
      <h2>Proyecto: {proyectoActual.nombre} </h2>
      <ul className="listado-tareas">
        {tareasProyecto.length === 0 ? (
          <li className="tarea">
            <p>No hay tareas</p>
          </li>
        ) : (
          tareasProyecto.map((tarea) => <Tarea tarea={tarea} key={tarea.id} />)
        )}
      </ul>

      <button
        type="button"
        className="btn btn-eliminar"
        onClick={onClickEliminar}
      >
        Eliminar Proyecto &times;
      </button>
    </>
  );
};

export default ListadoTareas;
