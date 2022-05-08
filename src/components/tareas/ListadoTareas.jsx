import React from "react";
import Tarea from "./Tarea";

const ListadoTareas = () => {
  const tareasProyecto = [
    { nombre: "Equis", estado: false, id: 1 },
    { nombre: "doses", estado: true, id: 2 },
    { nombre: "tres", estado: false, id: 3 },
    { nombre: "cuatroses", estado: true, id: 4 },
  ];
  return (
    <>
      <h2>Proyecto Activo</h2>
      <ul className="listado-tareas">
        {tareasProyecto.length === 0 ? (
          <li className="tarea">
            <p>No hay tareas</p>
          </li>
        ) : (
          tareasProyecto.map((tarea) => <Tarea tarea={tarea} key={tarea.id} />)
        )}
      </ul>

      <button type="button" className="btn btn-eliminar">
        Eliminar Proyecto &times;
      </button>
    </>
  );
};

export default ListadoTareas;
