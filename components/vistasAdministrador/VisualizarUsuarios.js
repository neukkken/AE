import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "../common/Header";
import UsuariosRegistrados from "../vistasAdministrador/dropdown/UsuariosRegistrados";
import AreaDeApoyo from "../vistasAdministrador/dropdown/AreaDeApoyo";
import DropCampesino from "../vistasAdministrador/dropdown/DropCampesino";
import DropEmpresa from "../vistasAdministrador/dropdown/DropEmpresa";
import Link from "next/link";

export default function VisualizarUsuarios() {
  const [selectedRole, setSelectedRole] = useState(null);
  const [usuarios, setUsuarios] = useState([]);

  const handleRoleSelect = (role) => {
    setSelectedRole(role);
  };

  useEffect(() => {
    if (selectedRole === "allUsers") {
      fetchUsuarios();
    }
  }, [selectedRole]);

  const fetchUsuarios = async () => {
    try {
      const response = await axios.get("https://projetback-r7o8.onrender.com/auth/usuario", {
        headers: {
          Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOnsiX2lkIjoiNjY3YjlkN2E3NGMwZmM4MTkyOGUzZjRhIiwibm9tYnJlIjoiU2FudGlhZ28iLCJhcGVsbGlkbyI6Ik5hcnZhZXoiLCJlbWFpbCI6InNhbnRpYWdvQGdtYWlsLmNvbSIsIm51bUlkZW50aWZpY2FjaW9uIjoiMTIzNDU2NzgiLCJ0ZWxlZm9ubyI6IjMxMyIsImZlY2hhTmFjaW1pZXRvIjoiMjAyNC0wNi0yNlQwNDo0NzoyMC43MjdaIiwiY2FyYWN0ZXJpemFjaW9uIjoiY2FyYWN0ZXJpemFjaW9uIiwiY29udHJhc2VuYSI6IiQyYiQxMCRPVmpqZDZwaWRQNThyMmhtczU0dk91SHp4elc2RWd6R3J2ZVVhdHAvL0xkS2xDbURWUXVmSyIsInJvbGUiOiJBZG1pbmlzdHJhZG9yIiwiX192IjowfSwicm9sZSI6IkFkbWluaXN0cmFkb3IiLCJpYXQiOjE3MTk1Mjc2MDUsImV4cCI6MTcxOTU0NTYwNX0.CuOkthOVPKlzHp00WgYnnlkMmIexB5_Yesgn13I0h3o`,
        },
      });
      setUsuarios(response.data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  const path = "/administrador";

  return (
    <>
      <Header />
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
        {selectedRole === "allUsers" && <UsuariosRegistrados usuarios={usuarios} />}
        {selectedRole === "Areas de apoyo" && <AreaDeApoyo />}
        {selectedRole === "Campesinos" && <DropCampesino />}
        {selectedRole === "Empresas" && <DropEmpresa />}
      </div>
    </>
  );
}
