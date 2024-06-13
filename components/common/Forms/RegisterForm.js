import Link from "next/link";
import PrimaryButton from "../PrimaryButton";

export default function RegisterForm() {
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
        <span>
          <a href="/iniciarsesion">Ya tienes cuenta?</a>
        </span>
        <PrimaryButton>Registrar</PrimaryButton>
      </section>
    </form>
  );
}
