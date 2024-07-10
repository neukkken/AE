"use client"
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import PrimaryButton from "../PrimaryButton";
import Loader from "@/app/loader/page";
import FullHeightLayout from "../../../containers/FullHeightLayout";

const URL_API_LOGIN = "https://projetback-r7o8.onrender.com/auth/login";
const URL_API_AUTH = "https://projetback-r7o8.onrender.com/auth/profile";
export default function SignInForm() {
  const [inputEmail, setInputEmail] = useState("");
  const [inputPassword, setInputPassword] = useState("");
  const [token, setToken] = useState("");
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      setToken(storedToken);
      AuthUser(storedToken);
    }
  }, []);

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
      AuthUser(result.access_token);
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  const AuthUser = async (accessToken) => {
    try {
      const response = await fetch(URL_API_AUTH, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
      });

      if (!response.ok) {
        throw new Error(`Error HTTP ${response.status} - ${response.statusText}`);
      }

      const result = await response.json();
      setUser(result.user);

      if (result.user && result.user.role) {
        switch (result.user.role) {
          case "Administrador":
            router.push("/administrador/vizualizarperfil");
            break;
          case "Empresa":
            router.push("/empresarios/perfil");
            break;
          case "Aprendiz":
            router.push("/usuarios/perfil");
            break;
          default:
            break;
        }
      } else {
        console.error("El usuario no tiene un rol definido");
      }
    } catch (error) {
      console.error(`Error al verificar la autenticación: ${error.message}`);
    }
  };

  console.log(user, "hola");
  console.log(inputEmail, "password:", inputPassword);

  if (loading) {
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