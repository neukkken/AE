'use client'
import Link from "next/link";
import PrimaryButton from "../PrimaryButton";
import { useState, useEffect } from "react";

const URL_API_REGISTER = 'https://projetback-r7o8.onrender.com/auth/usuario'

export default function RegisterForm() {
  const [inputName, setInputName] = useState('')
  const [inputSecondName, setInputSecondName] = useState('')
  const [inputEmail, setInputEmail] = useState('')
  const [inputNumCC, setInputNumCC] = useState('')
  const [inputTel, setInputTel] = useState('')
  const [inputCarac, setInputCarac] = useState('')
  

  function Register(){
    let data = {
      "nombre": "string",
      "apellido": "string",
      "email": "string",
      "numIdentificacion": "string",
      "telefono": "string",
      "caracterizacion": "string",
      "contrasena": "string",
      "role": {}
    }
  }

  return (
    <form className="FormNav">
      <h1>Registro</h1>
      <input type="text" placeholder="Nombre" />
      <input type="text" placeholder="Apellido" />
      <input type="text" placeholder="Numero de Documento" />
      <input type="text" placeholder="Tipo Documento" />
      <input type="text" placeholder="Correo Electronico" />
      <input type="password" placeholder="Contraseña" />
      <input type="password" placeholder="Confirmar Contraseña" />
      <input type="text" placeholder="Tipo de empresa" />
      <section>
        <PrimaryButton>Registrar</PrimaryButton>
        <span>
          <Link href="/iniciarsesion">Ya tienes cuenta?</Link>
        </span>
      </section>
    </form>
  );
}
