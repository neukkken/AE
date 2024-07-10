"use client"
import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "../common/Header";
import Footer from "../common/Footer";
import Link from "next/link";
import { FaEdit, FaTrash } from 'react-icons/fa';
import "../../src/Styles/visualizarusuarios.css";
import "../../src/Styles/todoslosusuarios.css";

export default function VisualizarUsuarios() {
  const [selectedRole, setSelectedRole] = useState("allUsers");
  const [usuarios, setUsuarios] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [editingUser, setEditingUser] = useState(null);
  const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOnsiX2lkIjoiNjY3YjlkN2E3NGMwZmM4MTkyOGUzZjRhIiwibm9tYnJlIjoiU2FudGlhZ28iLCJhcGVsbGlkbyI6Ik5hcnZhZXoiLCJlbWFpbCI6InNhbnRpYWdvQGdtYWlsLmNvbSIsIm51bUlkZW50aWZpY2FjaW9uIjoiMTIzNDU2NzgiLCJ0ZWxlZm9ubyI6IjMxMyIsImZlY2hhTmFjaW1pZXRvIjoiMjAyNC0wNi0yNlQwNDo0NzoyMC43MjdaIiwiY2FyYWN0ZXJpemFjaW9uIjoiY2FyYWN0ZXJpemFjaW9uIiwiY29udHJhc2VuYSI6IiQyYiQxMCRPVmpqZDZwaWRQNThyMmhtczU0dk91SHp4elc2RWd6R3J2ZVVhdHAvL0xkS2xDbURWUXVmSyIsInJvbGUiOiJBZG1pbmlzdHJhZG9yIiwiX192IjowfSwicm9sZSI6IkFkbWluaXN0cmFkb3IiLCJpYXQiOjE3MjA2NDIxMTcsImV4cCI6MTcyMDY2MDExN30.IXGAA06DQZoIuvQuEgtYwyKjPmR0oT2unlur2bkGNfo";

  useEffect(() => {
    fetchUsuariosWithRetry();
  }, []);

  const fetchUsuariosWithRetry = async (retries = 3) => {
    for (let i = 0; i < retries; i++) {
      try {
        const response = await axios.get("https://projetback-r7o8.onrender.com/auth/usuario", {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          }
        });
        setUsuarios(response.data);
        setLoading(false);
        return;
      } catch (err) {
        console.error(`Intento ${i + 1} fallido:`, err);
        if (i === retries - 1) {
          setError(err);
          setLoading(false);
        } else {
          await new Promise(resolve => setTimeout(resolve, 1000));
        }
      }
    }
  };

  const handleRoleSelect = (role) => {
    setSelectedRole(role);
  };

  const handleEditClick = (user) => {
    setEditingUser(user);
  };

 

  const handleDelete = async (userId) => {
    if (window.confirm('¿Estás seguro de que quieres eliminar este usuario?')) {
      try {
        await axios.delete(`https://projetback-r7o8.onrender.com/auth/usuario/${userId}`, {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          }
        });
        fetchUsuariosWithRetry();
      } catch (err) {
        console.error('Error al eliminar usuario:', err);
      }
    }
  };

  const handleSave = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`https://projetback-r7o8.onrender.com/auth/usuario/${editingUser._id}`, editingUser, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      });
      setEditingUser(null);
      fetchUsuariosWithRetry();
    } catch (err) {
      console.error('Error al actualizar usuario:', err);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditingUser(prev => ({ ...prev, [name]: value }));
  };

  if (loading) return <p>Cargando usuarios...</p>;
  if (error) return <p>Error al cargar usuarios: {error.message}</p>;

  return (
    <>
      <Header />
      <div className="container">
        <Link href="/administrador/usersregistrados">
          <h1 className="tituloDelRoll">USUARIOS REGISTRADOS</h1>
        </Link>
        <div className="selectorContainer">
          <div className="dropdown">
            <button className="selectorButton">Seleccionar Rol</button>
            <div className="dropdown-content">
              <button onClick={() => handleRoleSelect("allUsers")}>Todos los usuarios</button>
              <button onClick={() => handleRoleSelect("Areas de apoyo")}>Áreas de Apoyo</button>
              <button onClick={() => handleRoleSelect("Campesinos")}>Campesinos</button>
              <button onClick={() => handleRoleSelect("Empresas")}>Empresas</button>
            </div>
          </div>
        </div>
        <div className="user-grid">
          {selectedRole === "allUsers" && usuarios.map(user => (
            <div key={user._id} className="user-card">
              <div className="user-name">{user.nombre}</div>
              <div className="user-email">{user.email}</div>
              <div className="user-role">{user.role}</div>
              <div className="user-actions">
                <button onClick={() => handleEditClick(user)}><FaEdit /></button>
                <button onClick={() => handleDelete(user._id)}><FaTrash /></button>
              </div>
            </div>
          ))}
        </div>
        {editingUser && (
          <div className="editForm">
            <h2>Editar Usuario</h2>
            <form onSubmit={handleSave}>
              <input name="nombre" value={editingUser.nombre} onChange={handleInputChange} placeholder="Nombre" />
              <input name="apellido" value={editingUser.apellido} onChange={handleInputChange} placeholder="Apellido" />
              <input name="email" value={editingUser.email} onChange={handleInputChange} placeholder="Email" />
              <input name="numIdentificacion" value={editingUser.numIdentificacion} onChange={handleInputChange} placeholder="Número de Identificación" />
              <input name="telefono" value={editingUser.telefono} onChange={handleInputChange} placeholder="Teléfono" />
              <input name="fechaNacimieto" value={editingUser.fechaNacimieto} onChange={handleInputChange} type="date" />
              <input name="caracterizacion" value={editingUser.caracterizacion} onChange={handleInputChange} placeholder="Caracterización" />
              <select name="role" value={editingUser.role} onChange={handleInputChange}>
                <option value="Administrador">Administrador</option>
                <option value="Usuario">Usuario</option>
                {/* Agrega más opciones según sea necesario */}
              </select>
              <button type="submit">Guardar Cambios</button>
              <button type="button" onClick={() => setEditingUser(null)}>Cancelar</button>
            </form>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
}
