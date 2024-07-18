"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import PrimaryButton from "../PrimaryButton";
import Loader from "@/app/loader/page";
import { AuthUser } from "../../../utils/AuthUser";
import { usePathname } from "next/navigation";

const URL_API_LOGIN = "https://projetback-r7o8.onrender.com/auth/login";

export default function SignInForm() {
  const [inputEmail, setInputEmail] = useState("");
  const [inputPassword, setInputPassword] = useState("");
  const [token, setToken] = useState(null);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const currentPath = usePathname();

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      setToken(storedToken);
      AuthUser(storedToken, setUser, router, currentPath);
    }
  }, [router]);

  const handleChangeEmail = (event) => {
    setInputEmail(event.target.value);
  };

  const handleChangePassword = (event) => {
    setInputPassword(event.target.value);
  };

  const handleSumbit = async (event) => {
    event.preventDefault();

    if (!inputEmail || !inputPassword) {
      alert("Por favor, completa todos los campos");
      return;
    }

    setLoading(true);

    const data = {
      email: inputEmail,
      contrasena: inputPassword,
    };

    try {
      const response = await fetch(URL_API_LOGIN, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Error al iniciar sesión");
      }

      const result = await response.json();
      localStorage.setItem("token", result.access_token);
      setToken(result.access_token);
      AuthUser(result.access_token, setUser, router);
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  if (loading || token !== null) {
    return <Loader />;
  }

  return (
    <form className="FormNav" onSubmit={handleSumbit}>
      <h1>Inicia Sesión</h1>
      <input
        value={inputEmail}
        onChange={handleChangeEmail}
        type="email"
        placeholder="Correo Electrónico"
        required
      />
      <input
        value={inputPassword}
        onChange={handleChangePassword}
        type="password"
        placeholder="Contraseña"
        required
      />

      <PrimaryButton type="submit">Iniciar Sesión</PrimaryButton>
      <section>
        <Link href="/olvidarcontraseña">¿Olvidaste tu contraseña?</Link>
        <Link href="/registro">¿No tienes cuenta?</Link>
      </section>
    </form>
  );
}
