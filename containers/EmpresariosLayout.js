"use client";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import ContainerLayout from "./ContainerLayout";
import Auth from "../utils/helperAuth";
import { useRouter } from "next/navigation";
import Loader from "@/app/loader/page";
import FullHeightLayout from "./FullHeightLayout";

export default function EmpresariosLayout({ children }) {
  const token = localStorage.getItem("token");
  const router = useRouter();

  if (token == null || token == undefined) {
    router.push("/iniciarsesion");
  }

  if(token == null){
    return(
      <FullHeightLayout>
        <Loader/>
      </FullHeightLayout>
    )
  }

  return (
    <>
      <Header />
      <ContainerLayout>{children}</ContainerLayout>
      <Footer />
    </>
  );
}
