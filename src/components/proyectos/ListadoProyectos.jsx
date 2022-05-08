import React, { useContext, useEffect } from "react";
import ProyectoContext from "../../context/Proyectos/ProyectoContext";
import Proyecto from "./Proyecto";

const ListadoProyectos = () => {
  //extraer proyectos de initial state
  const { proyectos, obtenerProyectos } = useContext(ProyectoContext);

  useEffect(() => {
    obtenerProyectos();
  }, []);

  //revisar si hay proyectos
  if (proyectos.length === 0) return null;

  return (
    <ul className="listado-proyectos">
      {proyectos.map((proyecto) => (
        <Proyecto proyecto={proyecto} key={proyecto.id} />
      ))}{" "}
    </ul>
  );
};

export default ListadoProyectos;
