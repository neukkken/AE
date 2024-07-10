"use client";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import ContainerLayout from "./ContainerLayout";
import { useRouter } from "next/navigation";
import Loader from "@/app/loader/page";
import FullHeightLayout from "./FullHeightLayout";
import { useState, useEffect } from "react";

const API_URL_PROFILE = "https://projetback-r7o8.onrender.com/auth/profile"

export default function EmpresariosLayout({ children }) {
  const token = localStorage.getItem("token");
  if (token === null) {
    router.push("/iniciarsesion");
  }

  const router = useRouter();
  const [user, setUser] = useState(null)

  useEffect(() => {
    fetch(API_URL_PROFILE, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
    .then(response => {
      if(!response.ok){
        throw new Error("Ningun usuario encontrado")
      }else{
        return response.json()
      }
      
    })
    .then(data => setUser(data))
    .catch(error => console.error('Error fetching usuarios:', error));

  }, [token])

  console.log(user)
  
  if(user === null){
    return(
      <FullHeightLayout>
        <Loader/>
      </FullHeightLayout>
    )
  }else{
    return (
      <>
        <Header />
        <ContainerLayout>{children}</ContainerLayout>
        <Footer />
      </>
    );
  }
}
