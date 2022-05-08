import React from "react";
import Proyecto from "./Proyecto";

const ListadoProyectos = () => {
  const proyectos = [
    { nombre: "Tienda virtual" },
    { nombre: "Intranet" },
    { nombre: "Diseño sitioweb" },
    { nombre: "Tienda virtual" },
    { nombre: "Intranet" },
    { nombre: "Diseño sitioweb" },
    { nombre: "Tienda virtual" },
    { nombre: "Intranet" },
    { nombre: "Diseño sitioweb" },
  ];
  return (
    <ul className="listado-proyectos">
      {proyectos.map((proyecto) => (
        <Proyecto proyecto={proyecto} />
      ))}{" "}
    </ul>
  );
};

export default ListadoProyectos;
