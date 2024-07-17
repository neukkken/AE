"use client";

const URL_API_AUTH = "https://projetback-r7o8.onrender.com/auth/profile";

export const AuthUser = async (accessToken, setUser, router) => {
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
    setUser(result);

    if (result.sub.role) {
      switch (result.sub.role) {
        case "Administrador":
          router.push("/administrador/editarperfil");
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
