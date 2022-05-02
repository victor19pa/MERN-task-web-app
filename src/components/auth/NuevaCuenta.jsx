import React, { useState } from "react";
import { Link } from "react-router-dom";

const NuevaCuenta = () => {
  const [usuario, setUsuario] = useState({
    nombre: "",
    email: "",
    password: "",
    confirmar: "",
  });

  const { nombre, email, password, confirmar } = usuario;

  const onChange = (e) => {
    setUsuario({
      ...usuario,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    //validar que no haya campos vacios
  };

  return (
    <div className="form-usuario">
      <div className="contenedor-form sombra-dark">
        <h1>Registrar Cuenta</h1>

        <form onSubmit={onSubmit}>
          <div className="campo-form">
            <label htmlFor="nombre">Email</label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              placeholder="nombre"
              onChange={onChange}
              autoComplete="false"
              value={nombre}
            />
          </div>

          <div className="campo-form">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Correo Electronico"
              onChange={onChange}
              autoComplete="false"
              value={email}
            />
          </div>

          <div className="campo-form">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Contraseña"
              onChange={onChange}
              autoComplete="false"
              value={password}
            />
          </div>

          <div className="campo-form">
            <label htmlFor="confirmar">Password</label>
            <input
              type="password"
              id="confirmar"
              name="confirmar"
              placeholder="confirmar contraseña"
              onChange={onChange}
              autoComplete="false"
              value={confirmar}
            />
          </div>

          <div className="campo-form">
            <input
              type="submit"
              className="btn btn-primario btn-block"
              value="Registrarme"
            />
          </div>

          <Link to={"/login"} className="enlace-cuenta">
            ¿Ya tienes cuenta? Inicia Sesión
          </Link>
        </form>
      </div>
    </div>
  );
};

export default NuevaCuenta;
