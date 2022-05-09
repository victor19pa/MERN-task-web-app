import React, { useContext, useEffect } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import ProyectoContext from "../../context/Proyectos/ProyectoContext";
import Proyecto from "./Proyecto";

const ListadoProyectos = () => {
  //extraer proyectos de initial state
  const { proyectos, obtenerProyectos } = useContext(ProyectoContext);

  useEffect(() => {
    obtenerProyectos();

    // eslint-disable-next-line
  }, []);

  //revisar si hay proyectos
  if (proyectos.length === 0)
    return <p className="mensaje error">No hay proyectos</p>;

  return (
    <ul className="listado-proyectos">
      <TransitionGroup>
        {proyectos.map((proyecto) => (
          <CSSTransition key={proyecto.id} classNames={proyecto} timeout={400}>
            <Proyecto proyecto={proyecto} />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </ul>
  );
};

export default ListadoProyectos;
