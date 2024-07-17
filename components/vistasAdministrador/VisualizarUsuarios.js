"use client";
import React, { useState } from "react";
import "../../src/Styles/dropcampesinos.css";
import "../../src/Styles/visualizarusuarios.css";
import Link from "next/link";
import UsuariosRegistrados from "./dropdown/UsuariosRegistrados";
import AreaDeApoyo from "./dropdown/AreaDeApoyo";
import DropCampesino from "./dropdown/DropCampesino";
import DropEmpresa from "./dropdown/DropEmpresa";
import Header from "../common/Header";


export default function VisualizarUsuarios() {
  const [selectedRole, setSelectedRole] = useState(null);

  const handleRoleSelect = (role) => {
    setSelectedRole(role);
  };

  const path = "/administrador";

  return (
    <>
      <Link href={`${path}/usersregistrados`}>
        <h1 className="tituloDelRoll">USUARIOS REGISTRADOS</h1>
      </Link>
      <div className="selectorContainer">
        <div className="dropdown">
          <button className="selectorButton">Seleccionar Rol</button>
          <div className="dropdown-content">
            <button onClick={() => handleRoleSelect("allUsers")}>
              Todos los usuarios
            </button>
            <button onClick={() => handleRoleSelect("Areas de apoyo")}>
              Áreas de Apoyo
            </button>
            <button onClick={() => handleRoleSelect("Campesinos")}>
              Campesinos
            </button>
            <button onClick={() => handleRoleSelect("Empresas")}>
              Empresas
            </button>
          </div>
        </div>
      </div>
      <div className="usuariosContainer">
        {selectedRole === "allUsers" && <UsuariosRegistrados />}
        {selectedRole === "Areas de apoyo" && <AreaDeApoyo />}
        {selectedRole === "Campesinos" && <DropCampesino />}
        {selectedRole === "Empresas" && <DropEmpresa />}
      </div>
    </>
  );
}
