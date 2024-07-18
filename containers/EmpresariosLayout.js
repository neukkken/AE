"use client";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import ContainerLayout from "./ContainerLayout";
import { useRouter } from "next/navigation";
import Loader from "@/app/loader/page";
import FullHeightLayout from "./FullHeightLayout";
import { useState, useEffect } from "react";
import { AuthUser } from "../utils/AuthUser";
import "../src/Styles/anim/aninMain.css";
import { usePathname } from "next/navigation";

const API_URL_PROFILE = "https://projetback-r7o8.onrender.com/auth/profile"

export default function EmpresariosLayout({ children }) {

  const token = localStorage.getItem("token");
  const router = useRouter();
  const [user, setUser] = useState(null)
  const currentPath = usePathname();

  useEffect(() => {
    if (token === null || token === undefined || token == "") {
      router.push("/iniciarsesion");
    }else{
      AuthUser(token, setUser, router, currentPath)
    }
  }, [])

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
      
    }, [])
    .then(data => setUser(data))
    .catch(error => console.error('Error fetching usuarios:', error));
  }, [token])
  
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
