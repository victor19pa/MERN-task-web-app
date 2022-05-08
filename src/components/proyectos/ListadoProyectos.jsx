import React from "react";
import Proyecto from "./Proyecto";

const ListadoProyectos = () => {
  const proyectos = [
    { nombre: "Tienda virtual", id: 1 },
    { nombre: "Intranet", id: 2 },
    { nombre: "Diseño sitioweb", id: 3 },
    { nombre: "Tienda virtual", id: 4 },
    { nombre: "Intranet", id: 5 },
    { nombre: "Diseño sitioweb", id: 6 },
    { nombre: "Tienda virtual", id: 7 },
    { nombre: "Intranet", id: 8 },
    { nombre: "Diseño sitioweb", id: 9 },
  ];
  return (
    <ul className="listado-proyectos">
      {proyectos.map((proyecto) => (
        <Proyecto proyecto={proyecto} key={proyecto.id} />
      ))}{" "}
    </ul>
  );
};

export default ListadoProyectos;
