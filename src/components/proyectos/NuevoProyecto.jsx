import React from "react";

const NuevoProyecto = () => {
  return (
    <>
      <button className="btn btn-block btn-primario" type="button">
        Nuevo Proyecto
      </button>
      <form action="" className="formulario-nuevo-proyecto">
        <input
          type="text"
          className="input-text"
          placeholder="Nombre Proyecto"
          name="nombre"
        />
        <input
          type="submit"
          className="btn btn-primario btn-block"
          value="Agregar Proyecto"
        />
      </form>
    </>
  );
};

export default NuevoProyecto;
