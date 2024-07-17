"use client";

const URL_API_AUTH = "https://projetback-r7o8.onrender.com/auth/profile";

const roleToRouteMap = {
  "Administrador": ["/administrador/perfil", "/administrador/nuevosproyectos"],
  "Aprendiz": ["/usuarios/perfil", "/usuarios/subirproyectos"],
};

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

    const userRole = result.sub.role;

    if (!userRole) {
      console.error("El usuario no tiene un rol definido");
      return;
    }

    const allowedRoutes = roleToRouteMap[userRole];

    if (allowedRoutes) {
      const currentRoute = router.pathname;
      console.log(router.pathname)

      if (!allowedRoutes.includes(currentRoute)) {
        router.push(allowedRoutes[0]);
      }
    } else {
      console.error("Rol desconocido o ruta no definida para el rol: " + userRole);
    }
  } catch (error) {
    console.error(`Error al verificar la autenticación: ${error.message}`);
  }
};
