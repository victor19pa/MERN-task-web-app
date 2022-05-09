import React, { useContext } from "react";
import ProyectoContext from "../../context/Proyectos/ProyectoContext";
import TareaContext from "../../context/Tareas/TareaContext";

const Tarea = ({ tarea }) => {
  const { eliminarTarea, obtenerTareas } = useContext(TareaContext);
  const { proyecto } = useContext(ProyectoContext);

  const [proyectoActual] = proyecto;

  const tareaEliminar = (id) => {
    eliminarTarea(id);
    obtenerTareas(proyectoActual.id);
  };
  return (
    <li className="tarea sombra">
      <p>{tarea.nombre} </p>
      <div className="estado">
        {tarea.estado ? (
          <button className="completo" type="button">
            Completo
          </button>
        ) : (
          <button className="incompleto" type="button">
            Incompleto
          </button>
        )}
      </div>

      <div className="acciones">
        <button
          type="button"
          className="btn btn-primario"
          // onClick={() => seleccionarTarea(tarea) }
        >
          Editar
        </button>

        <button
          type="button"
          className="btn btn-secundario"
          onClick={() => tareaEliminar(tarea.id)}
        >
          Eliminar
        </button>
      </div>
    </li>
  );
};

export default Tarea;
