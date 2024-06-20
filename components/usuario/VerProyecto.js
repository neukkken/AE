import React from "react";
import Header from "../common/Header";
import Footer from "../common/Footer";
import "../../src/Styles/verproy.css";
import Link from "next/link";

export default function VerProyecto() {
  return (
    <>
      <Header />
      <div className="projects">
        <div className="title">Proyectos Postulados</div>
        <div className="projectsGrid">
          {/* Primera fila */}
          <div className="projectCard">
            <div className="projectName">Café de las Montañas</div>
            <div className="projectDescription">
              Un proyecto de café de origen que destaca los sabores únicos de las montañas, apoyando a los agricultores locales y promoviendo prácticas sostenibles de cultivo y procesamiento del café.
            </div>
            <Link className="projectDetails" href={"/empresarios/nuevosproyectos/proyecto"}><button className="projectButton left">Ver Más</button></Link>
          </div>
          {/* Segunda fila */}
          <div className="projectCard">
            <div className="projectName">Proyecto A</div>
            <div className="projectDescription">
              Este es el proyecto A, con una descripción interesante sobre lo que trata.
            </div>
             <Link className="projectDetails" href={"/empresarios/nuevosproyectos/proyecto"}><button className="projectButton left">Ver Más</button></Link>
          </div>
          <div className="projectCard">
            <div className="projectName">Proyecto B</div>
            <div className="projectDescription">
              Este es el proyecto B, con una descripción emocionante sobre lo que trata.
            </div>
            <div className="projectDetails">
              <button className="projectButton left">Ver Más</button>
            </div>
          </div>
          {/* Tercera fila */}
          <div className="projectCard">
            <div className="projectName">Proyecto C</div>
            <div className="projectDescription">
              Este es el proyecto C, con una descripción fascinante sobre lo que trata.
            </div>
            <Link className="projectDetails" href={"/empresarios/nuevosproyectos/proyecto"}><button className="projectButton left">Ver Más</button></Link>
          </div>
          <div className="projectCard">
            <div className="projectName">Proyecto D</div>
            <div className="projectDescription">
              Este es el proyecto D, con una descripción cautivadora sobre lo que trata.
            </div>
            <Link className="projectDetails" href={"/empresarios/nuevosproyectos/proyecto"}><button className="projectButton left">Ver Más</button></Link>
          </div>
          <div className="projectCard">
            <div className="projectName">Proyecto E</div>
            <div className="projectDescription">
              Este es el proyecto E, con una descripción estimulante sobre lo que trata.
            </div>
            <Link className="projectDetails" href={"/empresarios/nuevosproyectos/proyecto"}><button className="projectButton left">Ver Más</button></Link>
          </div>
          {/* Cuarta fila */}
          <div className="projectCard">
            <div className="projectName">Proyecto F</div>
            <div className="projectDescription">
              Este es el proyecto F, con una descripción inspiradora sobre lo que trata.
            </div>
            <Link className="projectDetails" href={"/empresarios/nuevosproyectos/proyecto"}><button className="projectButton left">Ver Más</button></Link>
          </div>
        
          <div className="projectCard">
            <div className="projectName">Proyecto g</div>
            <div className="projectDescription">
              Este es el proyecto F, con una descripción inspiradora sobre lo que trata.
            </div>
            <Link className="projectDetails" href={"/empresarios/nuevosproyectos/proyecto"}><button className="projectButton left">Ver Más</button></Link>
          </div>

          <div className="projectCard">
            <div className="projectName">Proyecto h</div>
            <div className="projectDescription">
              Este es el proyecto F, con una descripción inspiradora sobre lo que trata.
            </div>
            <Link className="projectDetails" href={"/empresarios/nuevosproyectos/proyecto"}><button className="projectButton left">Ver Más</button></Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
