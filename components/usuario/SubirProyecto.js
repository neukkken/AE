"use client";
import Footer from "../common/Footer";
import Header from "../common/Header";
import "../../src/Styles/subirproyectos.css";

export default function SubirProyecto() {
  const handleFileClick = () => {
    document.getElementById("document").click();
  };

  return (
    <>
      <Header />
      <div className="container">
        <form>
          <h2>Datos del proyecto</h2>

          <div className="form-group">
            <label htmlFor="projectName">Nombre del proyecto:</label>
            <input type="text" className="form-control" id="projectName" />
          </div>

          <div className="form-group">
            <label htmlFor="integrantes">Integrantes:</label>
            <div className="integrantes-group">
              <input
                type="text"
                className="form-control"
                id="integrante1"
                placeholder="Integrante 1"
              />
              <input
                type="text"
                className="form-control"
                id="integrante2"
                placeholder="Integrante 2"
              />
              <input
                type="text"
                className="form-control"
                id="integrante3"
                placeholder="Agregar Integrante"
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="idea">Idea del proyecto:</label>
            <textarea className="form-control" id="idea"></textarea>
          </div>

          <div className="form-group">
            <label htmlFor="ejeEstrategico">Eje Estratégico:</label>
            <input type="text" className="form-control" id="ejeEstrategico" />
          </div>

          <div className="form-group">
            <label htmlFor="objetivos">Objetivos del proyecto:</label>
            <textarea className="form-control" id="objetivos"></textarea>
          </div>
          <label htmlFor="document" className="adjuntarDocumento">
            Adjuntar Documento:
          </label>
          <div className="form-group file-upload">
            <input
              type="file"
              className="form-control"
              id="document"
              style={{ display: "none" }}
            />
            <span onClick={handleFileClick} className="pdf-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-file-type-pdf"
                width="44"
                height="44"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="#ff2825"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M14 3v4a1 1 0 0 0 1 1h4" />
                <path d="M5 12v-7a2 2 0 0 1 2 -2h7l5 5v4" />
                <path d="M5 18h1.5a1.5 1.5 0 0 0 0 -3h-1.5v6" />
                <path d="M17 18h2" />
                <path d="M20 15h-3v6" />
                <path d="M11 15v6h1a2 2 0 0 0 2 -2v-2a2 2 0 0 0 -2 -2h-1z" />
              </svg>
            </span>
            <span onClick={handleFileClick} className="docx-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon icon-tabler icon-tabler-file-type-docx"
                width="44"
                height="44"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke=" #0000ff"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M14 3v4a1 1 0 0 0 1 1h4" />
                <path d="M5 12v-7a2 2 0 0 1 2 -2h7l5 5v4" />
                <path d="M2 15v6h1a2 2 0 0 0 2 -2v-2a2 2 0 0 0 -2 -2h-1z" />
                <path d="M17 16.5a1.5 1.5 0 0 0 -3 0v3a1.5 1.5 0 0 0 3 0" />
                <path d="M9.5 15a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1 -3 0v-3a1.5 1.5 0 0 1 1.5 -1.5z" />
                <path d="M19.5 15l3 6" />
                <path d="M19.5 21l3 -6" />
              </svg>
            </span>
          </div>

          <div className="form-group">
            <button type="submit" className="btn-submit">
              Enviar Solicitud
            </button>
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
}
