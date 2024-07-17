"use client"
import Link from "next/link";
import CardProject from "../../../../components/common/CardProject";
import { useState, useEffect } from "react";
import Loader from "@/app/loader/page";
import FullHeightLayout from "../../../../containers/FullHeightLayout";
import UsuariosLayout from "../../../../containers/UsuariosLayout";

const URL_API_PROYECTOS =  "https://projetback-r7o8.onrender.com/proyectos" 

export default function NuevosProyectos() {
  const token = localStorage.getItem("token")
  const [proyectos, setProyectos] = useState(null)
  

  useEffect(() => {
    fetch(URL_API_PROYECTOS, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}` 
      }
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => setProyectos(data))
    .catch(error => console.error('Error fetching proyectos:', error));
  }, []);

  console.log(proyectos)

  if(proyectos !== null){
    return(
      <FullHeightLayout>
        <Loader/>
      </FullHeightLayout>

    )
  }else{
    return (
      <UsuariosLayout>
        {proyectos.map(proyecto => {
          if(proyecto.estado == "Completado"){
            return <CardProject key={proyecto._id} data={proyecto} />
          }
        })}
      </UsuariosLayout>
    );
  }

 
}
