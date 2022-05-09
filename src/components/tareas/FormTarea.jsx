import React, { useContext, useState } from "react";
import ProyectoContext from "../../context/Proyectos/ProyectoContext";
import TareaContext from "../../context/Tareas/TareaContext";

const FormTarea = () => {
  const { proyecto } = useContext(ProyectoContext);
  const { agregarTareas } = useContext(TareaContext);

  const [tarea, setTarea] = useState({
    nombre: "",
  });

  const { nombre } = tarea;

  //sino hay proyecto seleccionado
  if (!proyecto) {
    return null;
  }
  //array destructuring para extraer actual
  const [proyectoActual] = proyecto;

  const handleChange = (e) => {
    setTarea({
      ...tarea,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    //validar

    //pasar validacon

    //agregar nueva tarea
    tarea.proyectoId = proyectoActual.id;
    tarea.estado = false;
    agregarTareas(tarea);
    //reiniciar form
  };

  return (
    <div className="formulario">
      <form onSubmit={onSubmit}>
        <div className="contenedor-input">
          <input
            type="text"
            className="input-text"
            placeholder="Nombre Tarea"
            name="nombre"
            value={nombre}
            onChange={handleChange}
          />
        </div>
        <div className="contenedor-input">
          <input
            type="submit"
            className="btn btn-primario btn-submit btn-block"
            value="Agregar Tarea"
          />
        </div>
      </form>
    </div>
  );
};

export default FormTarea;
