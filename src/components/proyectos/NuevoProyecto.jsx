import React, { useContext, useState } from "react";
import ProyectoContext from "../../context/Proyectos/ProyectoContext";

const NuevoProyecto = () => {
  const { formulario, mostrarFormulario } = useContext(ProyectoContext);
  const [project, setProject] = useState({
    nombre: "",
  });

  const { nombre } = project;

  const onChangeProject = (e) => {
    setProject({
      ...project,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmitProject = (e) => {
    e.preventDefault();

    //validar el proyecto

    //agregar al state

    //reiniciar form
  };

  return (
    <>
      <button
        className="btn btn-block btn-primario"
        type="button"
        onClick={() => mostrarFormulario()}
      >
        Nuevo Proyecto
      </button>
      {formulario && (
        <form onSubmit={onSubmitProject} className="formulario-nuevo-proyecto">
          <input
            type="text"
            className="input-text"
            placeholder="Nombre Proyecto"
            name="nombre"
            value={nombre}
            onChange={onChangeProject}
          />
          <input
            type="submit"
            className="btn btn-primario btn-block"
            value="Agregar Proyecto"
          />
        </form>
      )}
    </>
  );
};

export default NuevoProyecto;
