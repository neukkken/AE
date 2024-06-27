"use client";
import Link from "next/link";
import PrimaryButton from "../PrimaryButton";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const URL_API_LOGIN = "https://projetback-r7o8.onrender.com/auth/login";
const URL_API_AUTH = "https://projetback-r7o8.onrender.com/auth/profile";

export default function SignInForm() {
  const [inputEmail, setInputEmail] = useState("");
  const [inputPassword, setInputPassword] = useState("");
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [user, setUser] = useState("");
  const router = useRouter();

  if (token !== null) {
    router.push("/empresarios/perfil");
  }

  const handleChangeEmail = (event) => {
    setInputEmail(event.target.value);
  };
  const handleChangePassword = (event) => {
    setInputPassword(event.target.value);
  };

  const handleSumbit = async (event) => {
    event.preventDefault();

    const data = {
      email: inputEmail,
      contrasena: inputPassword,
    };

    if (inputEmail !== "" && inputPassword !== "") {
      const response = await fetch(URL_API_LOGIN, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      localStorage.setItem("token", result.access_token);
      setToken(localStorage.getItem("token"));

      if (!response.ok) {
        throw new Error("Error al iniciar sesión");
      } else {
        AuthUser();
      }
    } else if (inputEmail == "" || inputPassword == "") {
      alert("error al iniciar, credenciales vacias");
    }
  };

  const AuthUser = async () => {
    try {
      const response = await fetch(URL_API_AUTH, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error(
          `Error HTTP ${response.status} - ${response.statusText}`,
        );
      }

      const result = await response.json();
      setUser(result.user);
      router.push("/empresarios/perfil");
    } catch (error) {
      console.error(`Error al verificar la autenticación: ${error.message}`);
    }
  };

  console.log(user);
  console.log(inputEmail, "password:", inputPassword);

  return (
    <form className="FormNav" onSubmit={handleSumbit}>
      <h1>Inicia Sesion</h1>
      <input
        value={inputEmail}
        onChange={handleChangeEmail}
        type="email"
        placeholder="Correo Electronico"
      />
      <input
        value={inputPassword}
        onChange={handleChangePassword}
        type="password"
        placeholder="Contraseña"
      />

      <label>
        <PrimaryButton>Iniciar Sesion</PrimaryButton>
        <section>
          <Link href="/olvidarcontraseña">Olvidaste tu contraseña?</Link>
          <Link href="/registro">No tienes cuenta?</Link>
        </section>
      </label>
    </form>
  );
}
