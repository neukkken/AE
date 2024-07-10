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

  const data = {
    "nombre": inputName,
    "apellido": inputSecondName,
    "email": inputEmail,
    "numIdentificacion": inputNumCC,
    "telefono": "1",
    "caracterizacion": "ninguna",
    "contrasena": inputPassword,
    "role": "Aprendiz"
  };

  async function Register() {
    if (inputPassword !== inputConfirmPassword) {
        alert('Las contraseñas no coinciden');
        return;
    }

    try {
        const response = await fetch(URL_API_REGISTER, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });

        if (!response.ok) {
          throw new Error('Error al registrar');
        }
        console.log(response)
        const result = await response.json();
        // Aquí puedes manejar el resultado de la API según tus necesidades
        // Por ejemplo, mostrar un mensaje de éxito
        alert('Registro exitoso');
        console.log(result); // Puedes ver la respuesta en la consola para depuración

    } catch (error) {
        console.error('Error durante el registro:', error.message);
        alert('Error al registrar');
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

  console.log(data)

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
        <PrimaryButton onClick={() => (Register())}>Registrar</PrimaryButton>
        <span>
          <Link href="/iniciarsesion">Ya tienes cuenta?</Link>
        </span>
      </section>
    </form>
  );
}
