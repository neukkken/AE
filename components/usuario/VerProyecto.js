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
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOnsiX2lkIjoiNjY3ZGI1NzIzOTAzMzg2MmI5MGU0MTk4Iiwibm9tYnJlIjoiRmVybmFuZG8iLCJhcGVsbGlkbyI6IkFyYW5kYSIsImVtYWlsIjoiZmVybmFuZG9AZ21haWwuY29tIiwibnVtSWRlbnRpZmljYWNpb24iOiIxMDA3IiwidGVsZWZvbm8iOiIzMjAiLCJmZWNoYU5hY2ltaWV0byI6IjIwMjQtMDYtMjdUMTg6NDQ6MzMuOTg5WiIsImNhcmFjdGVyaXphY2lvbiI6ImIiLCJjb250cmFzZW5hIjoiJDJiJDEwJG9JZ0Q1dllnWS43VmRSa0pSMTBoM09CbkpRR2N6WGVVV2IudjhpcEVHem1Hbm1xZTR5U0kyIiwicm9sZSI6IkFwcmVuZGl6IiwiX192IjowfSwicm9sZSI6IkFwcmVuZGl6IiwiaWF0IjoxNzE5NTE1NzM0LCJleHAiOjE3MTk1MzM3MzR9.DCwEDZGhAVhBQMCOMuQkI4ig_-8ioextXEA7KiMvZDc";

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
                Estado de la Idea: {proyecto.estado_idea}
              </div>
              <div className="projectDescription">
                Objetivo General: {proyecto.objetivo_general}
              </div>
              <div className="projectDescription">
                Objetivos Específicos: {proyecto.objetivos_especificos}
              </div>
              <div className="projectDescription">
                Eje Estratégico: {proyecto.eje_estrategico}
              </div>
              <div className="projectDescription">
                Estado: {proyecto.estado}
              </div>
              <div className="projectDescription">
                Fase: {proyecto.fase_idFase}
              </div>
              <div className="projectDescription">
                Categoría: {proyecto.categoria_idCategoria}
              </div>
              <div className="projectDescription">
                Convocatoria: {proyecto.convocatoria_idConvocatoria}
              </div>
              <div className="projectDescription">
                Usuario Asignado: {proyecto.usuario_id_asignado}
              </div>
              <div className="projectDescription">
                Fecha de Creación: {new Date(proyecto.fecha_creacion).toLocaleDateString()}
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