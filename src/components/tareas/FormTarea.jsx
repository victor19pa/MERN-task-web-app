import React, { useContext } from "react";
import ProyectoContext from "../../context/Proyectos/ProyectoContext";

const FormTarea = () => {
  const { proyecto } = useContext(ProyectoContext);
  //sino hay proyecto seleccionado
  if (!proyecto) {
    return null;
  }
  //array destructuring para extraer actual
  const [proyectoActual] = proyecto;

  const onSubmit = (e) => {
    e.preventDefault();

    //validar

    //pasar validacon

    //agregar nueva tarea

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
