import PrimaryButton from "../PrimaryButton";
import Link from "next/link";

export default function RecuperarContraseña() {
  return (
    <form className="FormNav">
      <h1>Recupere su Contraseña</h1>
      <input type="text" placeholder="Correo Electronico" />
      <section>
        <span></span>
        <PrimaryButton>
          <Link href="/iniciarsesion">Enviar</Link>
        </PrimaryButton>
      </section>
    </form>
  );
}
