'use client'
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import ContainerLayout from "./ContainerLayout";
import Auth from "../utils/helperAuth";

export default function EmpresariosLayout({ children }) {
  Auth()
  return (
    <>
      <Header />
      <ContainerLayout>{children}</ContainerLayout>
      <Footer />
    </>
  );
}
