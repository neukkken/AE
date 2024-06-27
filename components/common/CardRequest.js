"use client"
import { useState } from "react";
import Link from "next/link";

export default function CardRequest({ usuario }) {
  const path = "/administrador";
  const [isVisible, setIsVisible] = useState(true);

  const handleDelete = () => {
    setIsVisible(false);
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div className="CardRequest">
      <img alt="" className="image" />
      <span>{usuario.nombre}</span>
      <span>{usuario.apellido}</span>
      <span>{usuario.email}</span>
      <span>{usuario.numIdentificacion}</span>
      <span>{usuario.telefono}</span>
      <span>{new Date(usuario.fechaNacimieto).toLocaleDateString()}</span>
      <span>{usuario.caracterizacion}</span>
      <span>{usuario.role}</span>

      <div className="buttonsContainer">
        <button onClick={handleDelete} className="button">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-trash"
            width="30"
            height="44"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="#ff2825"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M4 7l16 0" />
            <path d="M10 11l0 6" />
            <path d="M14 11l0 6" />
            <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
            <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
          </svg>
        </button>
        <Link href={`${path}/editarperfil`}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-edit"
            width="44"
            height="30"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="#00b341"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M7 7h-1a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-1" />
            <path d="M20.385 6.585a2.1 2.1 0 0 0 -2.97 -2.97l-8.415 8.385v3h3l8.385 -8.415z" />
            <path d="M16 5l3 3" />
          </svg>
        </Link>
      </div>
    </div>
  );
}
