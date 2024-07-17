'use client';

import { useState } from "react";
import { useRouter } from 'next/navigation';
import Footer from "../common/Footer";
import Header from "../common/Header";
import "../../src/Styles/subirproyectos.css";
import PrimaryButton from "../common/PrimaryButton";
import axios from "axios";

// Función para decodificar el token JWT
function parseJwt(token) {
  const base64Url = token.split('.')[1];
  const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
  const jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
    return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
  }).join(''));

  return JSON.parse(jsonPayload);
}

export default function SubirProyecto() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    titulo: "",
    fecha: "",
    estado: "En progreso",
    descripcion: ""
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [id]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(false);

    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOnsiX2lkIjoiNjY3YjlkN2E3NGMwZmM4MTkyOGUzZjRhIiwibm9tYnJlIjoiU2FudGlhZ28iLCJhcGVsbGlkbyI6Ik5hcnZhZXoiLCJlbWFpbCI6InNhbnRpYWdvQGdtYWlsLmNvbSIsIm51bUlkZW50aWZpY2FjaW9uIjoiMTIzNDU2NzgiLCJ0ZWxlZm9ubyI6IjMxMyIsImZlY2hhTmFjaW1pZXRvIjoiMjAyNC0wNi0yNlQwNDo0NzoyMC43MjdaIiwiY2FyYWN0ZXJpemFjaW9uIjoiY2FyYWN0ZXJpemFjaW9uIiwiY29udHJhc2VuYSI6IiQyYiQxMCRPVmpqZDZwaWRQNThyMmhtczU0dk91SHp4elc2RWd6R3J2ZVVhdHAvL0xkS2xDbURWUXVmSyIsInJvbGUiOiJBZG1pbmlzdHJhZG9yIiwiX192IjowfSwicm9sZSI6IkFkbWluaXN0cmFkb3IiLCJpYXQiOjE3MjEyNDQzNzYsImV4cCI6MTcyMTI2MjM3Nn0.f3tOrafpQfSLBDelwaEQX3jWUA55naUu31yCp-OvUAw";
    
    const decodedToken = parseJwt(token);
    const usuarioId = decodedToken.sub._id;

    const dataToSend = {
      ...formData,
      usuarioId: usuarioId
    };

    console.log("Enviando datos:", dataToSend); // Log para depuración

    try {
      const response = await axios.post(
        "https://projetback-r7o8.onrender.com/proyectos",
        dataToSend,
        {
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
          }
        }
      ); 
      console.log("Respuesta del servidor:", response.data); // Log para depuración
      setSuccess(true);
      // Limpiar el formulario después de un envío exitoso
      setFormData({
        titulo: "",
        fecha: "",
        estado: "En progreso",
        descripcion: ""
      });
      // Mostrar alerta de éxito
      alert("Proyecto subido exitosamente");
      // Opcional: redirigir después de un breve retraso
      setTimeout(() => {
        router.push('/ruta-a-ver-proyectos');
      }, 2000);
    } catch (err) {
      console.error("Error detallado:", err.response?.data || err.message);
      setError(err.response?.data?.message || err.message);
      // Mostrar alerta de error
      alert("Error al subir el proyecto: " + (err.response?.data?.message || err.message));
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Header />
      <div className="container">
        <form onSubmit={handleSubmit}>
          <h2>Datos del proyecto</h2>

          <div className="form-group">
            <label htmlFor="titulo">Título del proyecto:</label>
            <input
              type="text"
              className="form-control"
              id="titulo"
              value={formData.titulo}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="fecha">Fecha:</label>
            <input
              type="date"
              className="form-control"
              id="fecha"
              value={formData.fecha}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="estado">Estado:</label>
            <select
              className="form-control"
              id="estado"
              value={formData.estado}
              onChange={handleChange}
              required
            >
              <option value="En progreso">En progreso</option>
              <option value="Completado">Completado</option>
              <option value="Pendiente">Pendiente</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="descripcion">Descripción del proyecto:</label>
            <textarea
              className="form-control"
              id="descripcion"
              value={formData.descripcion}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          <div className="button">
            <PrimaryButton type="submit" disabled={loading}>
              {loading ? "Enviando..." : "Enviar"}
            </PrimaryButton>
          </div>
          {error && <p className="error-message">Error al subir el proyecto: {error}</p>}
          {success && <p className="success-message">¡Proyecto subido exitosamente!</p>}
        </form>
      </div>
      <Footer />
    </>
  );
}