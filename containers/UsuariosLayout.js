"use client";

import Footer from "../components/common/Footer";
import Header from "../components/common/HeaderUsuarios";
import ContainerLayout from "./ContainerLayout";
import { useRouter } from "next/navigation";
import Loader from "@/app/loader/page";
import FullHeightLayout from "./FullHeightLayout";
import { useState, useEffect } from "react";
import "../src/Styles/anim/aninMain.css";
import { AuthUser } from "../utils/AuthUser";

const API_URL_PROFILE = "https://projetback-r7o8.onrender.com/auth/profile";

export default function UsuariosLayout({ children }) {
  const router = useRouter();
  const token = localStorage.getItem("token");
  const [user, setUser] = useState(null);
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    if (token === null) {
      router.push("/iniciarsesion");
    }else{
        AuthUser(token, setUser, router)
    }

    fetch(API_URL_PROFILE, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then(response => {
        if (!response.ok) {
          throw new Error("Ningun usuario encontrado");
        } else {
          return response.json();
        }
      })
      .then(data => {
        setUser(data);
        setFadeIn(true); // Activa la animación cuando los datos estén listos
      })
      .catch(error => console.error('Error fetching usuarios:', error));
  }, [token]);

  console.log(user);

  if (user === null) {
    return (
      <FullHeightLayout>
        <Loader />
      </FullHeightLayout>
    );
  } else {
    return (
      <div className={`fade-in ${fadeIn ? 'fade-in' : ''}`}>
        <Header />
        <ContainerLayout>{children}</ContainerLayout>
        <Footer />
      </div>
    );
  }
}
