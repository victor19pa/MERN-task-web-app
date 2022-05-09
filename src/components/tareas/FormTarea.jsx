import React, { useContext, useEffect, useState } from "react";
import ProyectoContext from "../../context/Proyectos/ProyectoContext";
import TareaContext from "../../context/Tareas/TareaContext";

const FormTarea = () => {
  const { proyecto } = useContext(ProyectoContext);
  const {
    agregarTareas,
    errorTarea,
    validarTarea,
    obtenerTareas,
    tareaSeleccionada,
  } = useContext(TareaContext);

  useEffect(() => {
    if (tareaSeleccionada !== null) {
      setTarea(tareaSeleccionada);
    } else {
      setTarea({
        nombre: "",
      });
    }
  }, [tareaSeleccionada]);

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
    if (nombre.trim() === "") {
      validarTarea();
      return;
    }
    //pasar validacon
    //agregar nueva tarea
    tarea.proyectoId = proyectoActual.id;
    tarea.estado = false;
    agregarTareas(tarea);
    //obtener y filtrar tareas proyecto actual
    obtenerTareas(proyectoActual.id);
    //reiniciar form
    setTarea({
      nombre: "",
    });
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
            value={tareaSeleccionada ? "Editar Tarea" : "Agregar Tarea"}
          />
        </div>
      </form>
      {errorTarea && (
        <p className="mensaje error">¡El nombre de la tarea es necesario!</p>
      )}
    </div>
  );
};

export default FormTarea;
