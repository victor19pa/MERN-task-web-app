import React, { useContext } from "react";
import ProyectoContext from "../../context/Proyectos/ProyectoContext";
import TareaContext from "../../context/Tareas/TareaContext";

const Proyecto = ({ proyecto }) => {
  const { proyectoActual } = useContext(ProyectoContext);
  const { obtenerTareas } = useContext(TareaContext);

  const seleccionarProyecto = (id) => {
    proyectoActual(id);
    obtenerTareas(id);
  };

  return (
    <li>
      <button
        type="button"
        className="btn btn-blank"
        onClick={() => seleccionarProyecto(proyecto.id)}
      >
        {proyecto.nombre}
      </button>
    </li>
  );
};

export default Proyecto;
