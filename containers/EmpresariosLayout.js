import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import ContainerLayout from "./ContainerLayout";

export default function EmpresariosLayout({ children }) {
  return (
    <>
      <Header />
      <ContainerLayout>{children}</ContainerLayout>
      <Footer />
    </>
  );
}
