import Link from "next/link";
import PrimaryButton from "../PrimaryButton";

export default function SignInForm() {
  return (
    <form className="FormNav">
      <h1>Inicia Sesion</h1>
      <input type="text" placeholder="Correo Electronico" />
      <input type="password" placeholder="Contraseña" />
      <section>
        <span>
          <a href="/olvidarcontraseña">Olvidaste tu contraseña?</a>
          <a href="/registro">No tienes cuenta?</a>
        </span>
        <PrimaryButton>Iniciar Sesion</PrimaryButton>
      </section>
    </form>
  );
}
