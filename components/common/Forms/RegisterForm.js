"use client";
import Link from "next/link";
import PrimaryButton from "../PrimaryButton";
import { useState } from "react";
import { useRouter } from "next/navigation";

const URL_API_REGISTER = "https://projetback-r7o8.onrender.com/auth/usuario";

export default function RegisterForm() {
  const [inputName, setInputName] = useState("");
  const [inputSecondName, setInputSecondName] = useState("");
  const [inputEmail, setInputEmail] = useState("");
  const [inputNumCC, setInputNumCC] = useState("");
  const [inputPassword, setInputPassword] = useState("");
  const [inputConfirmPassword, setInputConfirmPassword] = useState("");
  const router = useRouter();

  const data = {
    "nombre": inputName,
    "apellido": inputSecondName,
    "email": inputEmail,
    "numIdentificacion": inputNumCC,
    "telefono": "320",
    "caracterizacion": "ninguna",
    "contrasena": inputPassword,
    "role": "Aprendiz"
  };
  
  async function Register(event) {
    event.preventDefault();
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

      const result = await response.json();
      alert('Registro exitoso');
      console.log(result);

      router.push("/iniciarsesion")

      // Reset the form
      setInputName("");
      setInputSecondName("");
      setInputEmail("");
      setInputNumCC("");
      setInputPassword("");
      setInputConfirmPassword("");
      
    } catch (error) {
      console.error('Error durante el registro:', error.message);
      console.log(error.message)
      alert('Error al registrar');
    }
  }

  return (
    <form className="FormNav" onSubmit={Register}>
      <h1>Registro</h1>
      <input
        value={inputName}
        onChange={(e) => setInputName(e.target.value)}
        type="text"
        placeholder="Nombre"
      />
      <input
        value={inputSecondName}
        onChange={(e) => setInputSecondName(e.target.value)}
        type="text"
        placeholder="Apellido"
      />
      <input
        value={inputNumCC}
        onChange={(e) => setInputNumCC(e.target.value)}
        type="text"
        placeholder="Numero de Documento"
      />
      <input
        value={inputEmail}
        onChange={(e) => setInputEmail(e.target.value)}
        type="text"
        placeholder="Correo Electronico"
      />
      <input
        value={inputPassword}
        onChange={(e) => setInputPassword(e.target.value)}
        type="password"
        placeholder="Contraseña"
      />
      <input
        value={inputConfirmPassword}
        onChange={(e) => setInputConfirmPassword(e.target.value)}
        type="password"
        placeholder="Confirmar Contraseña"
      />
      <section>
        <PrimaryButton type="submit">Registrar</PrimaryButton>
        <span>
          <Link href="/iniciarsesion">Ya tienes cuenta?</Link>
        </span>
      </section>
    </form>
  );
}
