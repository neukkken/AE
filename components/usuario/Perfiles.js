import React from 'react';//primer paso 
import CardProjectResumen from '../common/CardProjectResumen';
import EmpresariosLayout from '../../containers/EmpresariosLayout';
import styles from '../../src/Styles/perfilusu.css';
import Link from 'next/link';//se importa  solo

export default function Perfiles() {
  const profileData = {
    nombre: "Juan",
    apellidos: "Pérez",
    correo: "juan.perez@example.com",
    numeroTelefonico: "123-456-7890",
   genero: "Masculino",
   fechadenacimiento: "09-07-2024",
   ciudad: "Popayan"

  };

  return (
    <EmpresariosLayout>
      <section className="ProfileEmpresas">
        <div className="SmallProfileHeader">
          <img className="icono" src="https://cdn-icons-png.flaticon.com/512/2922/2922524.png" alt="" width={245} />
          <h1 className={styles.WelcomeMessage}>
            Bienvenido, {profileData.nombre}
          </h1>
        </div>
        <section className="ProfileContent">
          <aside className={styles.InfoSection}>
            <h2 className="SectionTitl">Información</h2>
         
            {/*
            aqui esta la forma de enviar a otra pagina
            */}
            <Link className="iconoactualizar" href={"/usuarios/actualizarperfil"}><img  src="https://w7.pngwing.com/pngs/897/373/png-transparent-edit-edit-icon-pen-edit-pencil-essential-icon.png" alt="" width={18} /></Link> 

            <div className="InfoItem"><span>Nombre:</span> <span>{profileData.nombre}</span></div>
            <div className="InfoItem"><span>Apellidos:</span> <span>{profileData.apellidos}</span></div>
            <div className="InfoItem"><span>Correo Electrónico:</span> <span>{profileData.correo}</span></div>
            <div className="InfoItem"><span>Número Telefónico:</span> <span>{profileData.numeroTelefonico}</span></div>
            <div className="InfoItem"><span>Genero:</span> <span>{profileData.genero}</span></div>
            <div className="InfoItem"><span>Fecha de Nacimiento:</span> <span>{profileData.fechadenacimiento}</span></div>
            
          </aside>
          <aside className="ProjectsSection">
            <h2 className={styles.SectionTitle}>Proyectos Apoyados</h2>
            {Array(5).fill(0).map((_, index) => (
              <CardProjectResumen key={index} url="/empresarios/nuevosproyectos/proyecto" />
            ))}
          </aside>
        </section>
      </section>
    </EmpresariosLayout>
  );
}