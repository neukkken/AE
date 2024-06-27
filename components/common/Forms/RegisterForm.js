"use client";
import Link from "next/link";
import PrimaryButton from "../PrimaryButton";
import { useState, useEffect } from "react";

const URL_API_REGISTER = "https://projetback-r7o8.onrender.com/auth/usuario";

export default function RegisterForm() {
  const [inputName, setInputName] = useState("");
  const [inputSecondName, setInputSecondName] = useState("");
  const [inputEmail, setInputEmail] = useState("");
  const [inputNumCC, setInputNumCC] = useState("");
  const [inputPassword, setInputPassword] = useState("");
  const [inputConfirmPassword, setInputConfirmPassword] = useState("");

  let data = {
    nombre: inputName,
    apellido: inputSecondName,
    email: inputEmail,
    numIdentificacion: inputNumCC,
    telefono: '',
    caracterizacion: "ninguna",
    contrasena: inputPassword,
    role: 'Aprendiz'
  };

  async function Register() {
    if(inputPassword !== inputConfirmPassword){
      alert('Contrasenas no coinciden')
    }else{
      const response = await fetch(URL_API_LOGIN, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
  
      const result = await response.json();
      
    }
  }

  const handleChangeName = (event) => {
    setInputName(event.target.value);
  };

  const handleChangeEmail = (event) => {
    setInputEmail(event.target.value);
  };

  const handleChangeNumCC = (event) => {
    setInputNumCC(event.target.value);
  };

  const handleChangeSecondName = (event) => {
    setInputSecondName(event.target.value);
  };

  const handleChangePassword = (event) => {
    setInputPassword(event.target.value);
  };

  const handleChangeConfirmPassword = (event) => {
    setInputConfirmPassword(event.target.value);
  };

  return (
    <form className="FormNav" >
      <h1>Registro</h1>
      <input
        value={inputName}
        onChange={handleChangeName}
        type="text"
        placeholder="Nombre"
      />
      <input
        value={inputSecondName}
        onChange={handleChangeSecondName}
        type="text"
        placeholder="Apellido"
      />
      <input
        value={inputNumCC}
        onChange={handleChangeNumCC}
        type="text"
        placeholder="Numero de Documento"
      />
      <input
        value={inputEmail}
        onChange={handleChangeEmail}
        type="text"
        placeholder="Correo Electronico"
      />
      <input
        value={inputPassword}
        onChange={handleChangePassword}
        type="password"
        placeholder="Contraseña"
      />
      <input
        value={inputConfirmPassword}
        onChange={handleChangeConfirmPassword}
        type="password"
        placeholder="Confirmar Contraseña"
      />
      <section>
        <PrimaryButton OnClick={() => (Register())}>Registrar</PrimaryButton>
        <span>
          <Link href="/iniciarsesion">Ya tienes cuenta?</Link>
        </span>
      </section>
    </form>
  );
}
