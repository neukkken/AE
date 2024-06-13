import Link from "next/link";
import CardProject from "../../../../components/common/CardProject";
import EmpresariosLayout from "../../../../containers/EmpresariosLayout";

export default function NuevosProyectos() {
  return (
    <EmpresariosLayout>
      <Link href="/empresarios/nuevosproyectos/proyecto">
        <CardProject />
      </Link>
      <Link href="/empresarios/nuevosproyectos/proyecto">
        <CardProject />
      </Link>
      <Link href="/empresarios/nuevosproyectos/proyecto">
        <CardProject />
      </Link>
      <Link href="/empresarios/nuevosproyectos/proyecto">
        <CardProject />
      </Link>
      <Link href="/empresarios/nuevosproyectos/proyecto">
        <CardProject />
      </Link>
      <Link href="/empresarios/nuevosproyectos/proyecto">
        <CardProject />
      </Link>
      <Link href="/empresarios/nuevosproyectos/proyecto">
        <CardProject />
      </Link>
      <Link href="/empresarios/nuevosproyectos/proyecto">
        <CardProject />
      </Link>
    </EmpresariosLayout>
  );
}
