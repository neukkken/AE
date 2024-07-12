'use client'

import { useState, useEffect } from "react";
import Header from "../common/Header";
import Footer from "../common/Footer";
import axios from "axios";
import Link from "next/link";
import "../../src/Styles/verproy.css";

export default function VerProyecto() {
  const [proyectos, setProyectos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchProyectosWithRetry = async (retries = 3) => {
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOnsiX2lkIjoiNjY3YjlkN2E3NGMwZmM4MTkyOGUzZjRhIiwibm9tYnJlIjoiU2FudGlhZ28iLCJhcGVsbGlkbyI6Ik5hcnZhZXoiLCJlbWFpbCI6InNhbnRpYWdvQGdtYWlsLmNvbSIsIm51bUlkZW50aWZpY2FjaW9uIjoiMTIzNDU2NzgiLCJ0ZWxlZm9ubyI6IjMxMyIsImZlY2hhTmFjaW1pZXRvIjoiMjAyNC0wNi0yNlQwNDo0NzoyMC43MjdaIiwiY2FyYWN0ZXJpemFjaW9uIjoiY2FyYWN0ZXJpemFjaW9uIiwiY29udHJhc2VuYSI6IiQyYiQxMCRPVmpqZDZwaWRQNThyMmhtczU0dk91SHp4elc2RWd6R3J2ZVVhdHAvL0xkS2xDbURWUXVmSyIsInJvbGUiOiJBZG1pbmlzdHJhZG9yIiwiX192IjowfSwicm9sZSI6IkFkbWluaXN0cmFkb3IiLCJpYXQiOjE3MjA4MjQ1NjcsImV4cCI6MTcyMDg0MjU2N30.sItRgmDKJSAI0jMBjnk_P3MDXdUtmoNL5WFtJnBhNTY";

    for (let i = 0; i < retries; i++) {
      try {
        const response = await axios.get("https://projetback-r7o8.onrender.com/proyectos", {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          }
        });
        setProyectos(response.data);
        setLoading(false);
        return;
      } catch (err) {
        console.error(`Intento ${i + 1} fallido:`, err);
        if (i === retries - 1) {
          console.error("Error completo:", err);
          console.error("Respuesta del servidor:", err.response);
          console.error("Datos de la respuesta:", err.response ? err.response.data : "No hay datos");
          setError(err);
          setLoading(false);
        } else {
          await new Promise(resolve => setTimeout(resolve, 1000)); // Espera 1 segundo antes de reintentar
        }
      }
    }
  };

  useEffect(() => {
    fetchProyectosWithRetry();
  }, []);

  if (loading) return <p>Cargando proyectos...</p>;
  if (error) return <p>Error al cargar proyectos: {error.message}</p>;

  return (
    <>
      <Header />
      <div className="projects">
  <div className="title">Proyectos Postulados</div>
  <div className="projectsGrid">
    {proyectos.map((proyecto) => (
      <div className="projectCard" key={proyecto._id}>
        <div className="projectName">{proyecto.titulo}</div>
        <div className="projectDescription">
          Fecha: {proyecto.fecha}
        </div>
        <div className="projectDescription">
          Estado: {proyecto.estado}
        </div>
        <div className="projectDescription">
          Descripción: {proyecto.descripcion}
        </div>
        <Link className="projectDetails" href={`/empresarios/nuevosproyectos/proyecto/${proyecto._id}`}>
          <button className="projectButton left">Ver Más</button>
        </Link>
      </div>
    ))}
  </div>
</div>
      <Footer />
    </>
  );
}