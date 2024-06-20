import Link from "next/link";
import PrimaryButton from "../../../../../components/common/PrimaryButton";
import EmpresariosLayout from "../../../../../containers/EmpresariosLayout";

export default function Proyecto() {
  return (
    <EmpresariosLayout>
      <section className="ProjectDetail">
        <div>
          <span className="Category">Categoria</span>
          <span className="Location">Locacion</span>
        </div>
        <span className="Date">2024.10.4</span>
        <h1>Titulo del proyecto</h1>
        <span className="ProjectOwner">Propietario del Proyecto</span>
        <br />
        <img />

        <div className="StrategicAxis">
          <br />
          <h1>Eje Estratejico</h1>
          <p>
            El eje estratégico del proyecto Semillas El eje estratégico del
            proyecto "Semillas de mi Tierra se centra en la sostenibilidad
            integral, abarcando aspectos económicos, sociales y
            medioambientales. A través de la implementacion El eje estratégico
            del proyecto Semillas El eje estratégico del proyecto Semillas de mi
            Tierra se centra en la sostenibilidad integral, abarcando aspectos
            económicos, sociales y medioambientales. A través de la
            implementacion de prácticas agrícolas regenerativas, la promoción de
            la diversificación de cultivos y la formación de redes de apoyo
            comunitario, se busca alcanzar un equilibrio entre la producción de
            alimentos saludables, la protección de los recursos naturales y el
            fortalecimiento de la comunidad campesinade mi Tierra" se centra en
            la sostenibilidad integral, abarcando aspectos económicos, sociales
            y medioambientales. A través de la implementación de prácticas
            agrícolas regenerativas, la promoción de la diversificación de
            cultivos y la formación de redes de apoyo comunitario, se busca
            alcanzar un equilibrio entre la producción de alimentos saludables,
            la protección de los recursos naturales y el fortalecimiento de la
            comunidad campesina de prácticas agrícolas regenerativas, la
            promoción de la diversificación de cultivos y la formación de redes
            de apoyo comunitario, se busca alcanzar un equilibrio entre la
            producción de alimentos saludables, la protección de los recursos
            naturales y el fortalecimiento de la comunidad campesinade mi
            Tierra" se centra en la sostenibilidad integral, abarcando aspectos
            económicos, sociales y medioambientales. A través de la
            implementación de prácticas agrícolas regenerativas, la promoción de
            la diversificación de cultivos y la formación de redes de apoyo
            comunitario, se busca alcanzar un equilibrio entre la producción de
            alimentos saludables, la protección de los recursos naturales y el
            fortalecimiento de la comunidad campesina
          </p>
          <br />
        </div>
        <div className="Integrants">
          <h1>Integrates</h1>
          <span className="Integrant">
            1. Marta Rodríguez: Con más de 20 años de experiencia en agricultura
            orgánica, Marta es una líder en la comunidad y se especializa en el
            cultivo de hortalizas.
          </span>
          <span className="Integrant">
            1. Marta Rodríguez: Con más de 20 años de experiencia en agricultura
            orgánica, Marta es una líder en la comunidad y se especializa en el
            cultivo de hortalizas.
          </span>
          <br />
        </div>
        <div className="Objetivos">
          <h1>Obetivos</h1>
          <span className="Objetive">
            1. Fomentar la producción de alimentos orgánicos y de calidad,
            promoviendo prácticas agrícolas sostenibles y respetuosas con el
            medio ambiente.
          </span>
          <span className="Objetive">
            2. Generar oportunidades económicas y fortalecer la autonomía de los
            campesinos a través del cultivo de hortalizas.
          </span>
        </div>
        <br />
        <div className="DocumentDownload">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="icon icon-tabler icons-tabler-outline icon-tabler-file-type-pdf"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M14 3v4a1 1 0 0 0 1 1h4" />
            <path d="M5 12v-7a2 2 0 0 1 2 -2h7l5 5v4" />
            <path d="M5 18h1.5a1.5 1.5 0 0 0 0 -3h-1.5v6" />
            <path d="M17 18h2" />
            <path d="M20 15h-3v6" />
            <path d="M11 15v6h1a2 2 0 0 0 2 -2v-2a2 2 0 0 0 -2 -2h-1z" />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="icon icon-tabler icons-tabler-outline icon-tabler-file-type-docx"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M14 3v4a1 1 0 0 0 1 1h4" />
            <path d="M5 12v-7a2 2 0 0 1 2 -2h7l5 5v4" />
            <path d="M2 15v6h1a2 2 0 0 0 2 -2v-2a2 2 0 0 0 -2 -2h-1z" />
            <path d="M17 16.5a1.5 1.5 0 0 0 -3 0v3a1.5 1.5 0 0 0 3 0" />
            <path d="M9.5 15a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1 -3 0v-3a1.5 1.5 0 0 1 1.5 -1.5z" />
            <path d="M19.5 15l3 6" />
            <path d="M19.5 21l3 -6" />
          </svg>
        </div>
        <br />
        <PrimaryButton>
          <Link href="https://mail.google.com/mail/u/0/#inbox" target="_blank">
            Apoyar
          </Link>
        </PrimaryButton>
      </section>
    </EmpresariosLayout>
  );
}
