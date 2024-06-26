"use client";
import CardProjectResumen from "../../../../components/common/CardProjectResumen";
import EmpresariosLayout from "../../../../containers/EmpresariosLayout";
import { useState, useEffect } from "react";
const URL_API_AUTH = "https://projetback-r7o8.onrender.com/auth/profile";

export default function Perfil() {

  const [data, setData] = useState(null);
  const [token, setToken] = useState(localStorage.getItem('token'));

  useEffect(() => {
    fetch(URL_API_AUTH, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => setData(data.user));
  }, []);

  if(data == null){
    return(
      <>
        cargando..
      </>
    )
  }


  return (
    <EmpresariosLayout>
      <section className="ProfileEmpresas">
        <img className="ProfileImg" alt="" />
        <h1>
          Bienvenido, {data.nombre} {data.apellido}!
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="icon icon-tabler icons-tabler-outline icon-tabler-edit"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M7 7h-1a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-1" />
            <path d="M20.385 6.585a2.1 2.1 0 0 0 -2.97 -2.97l-8.415 8.385v3h3l8.385 -8.415z" />
            <path d="M16 5l3 3" />
          </svg>
        </h1>
        <section>
          <aside>
            <h2>Informacion</h2>
            <span>Nombre: {data.nombre}</span>
            <span>Apellidos: {data.apellido}</span>
            <span>Correo Electronico: {data.email}</span>
            <span>Numero Telefonico: {data.telefono}</span>
          </aside>
          <aside>
            <h2>Proyectos Apoyados</h2>
            <CardProjectResumen url="/empresarios/nuevosproyectos/proyecto" />
            <CardProjectResumen url="/empresarios/nuevosproyectos/proyecto" />
            <CardProjectResumen url="/empresarios/nuevosproyectos/proyecto" />
            <CardProjectResumen url="/empresarios/nuevosproyectos/proyecto" />
            <CardProjectResumen url="/empresarios/nuevosproyectos/proyecto" />
            <CardProjectResumen url="/empresarios/nuevosproyectos/proyecto" />
            <CardProjectResumen url="/empresarios/nuevosproyectos/proyecto" />
            <CardProjectResumen url="/empresarios/nuevosproyectos/proyecto" />
            <CardProjectResumen url="/empresarios/nuevosproyectos/proyecto" />
            <CardProjectResumen url="/empresarios/nuevosproyectos/proyecto" />
            <CardProjectResumen url="/empresarios/nuevosproyectos/proyecto" />
          </aside>
        </section>
      </section>
    </EmpresariosLayout>
  );

  
}
