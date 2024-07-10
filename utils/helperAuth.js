"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Auth() {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token !== "") {
      router.push("/iniciarsesion");
    } else {
      router.push("/empresarios/perfil");
    }
  }, []);
}
