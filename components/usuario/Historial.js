
// Importar React y los componentes necesarios
import React from 'react';
import Header from '../common/Header';
import Footer from '../common/Footer';
import '../../src/Styles/historial.css'; // Importar estilos CSS
import Link from 'next/link';

// Definir el componente Historial
export default function Historial() {
  return (
    <div className="container"> {/* Utilizamos className en lugar de style para aplicar estilos desde el CSS externo */}
      <Header />

      <main className="content"> {/* Utilizamos className en lugar de style para aplicar estilos desde el CSS externo */}
        <h1>Historial de Cambios</h1>

        <div className="table-container">
          <table className="history-table">
            <thead>
              <tr>
                <th>Fecha</th>
                <th>Usuario</th>
                <th>Descripción</th>
              </tr>
            </thead>
            <tbody>
              {/* Ejemplo de cambios */}
              <tr>
                <td>2024-06-19</td>
                
                <Link href={"/usuarios/verproyectos/"}><td>Usuario A</td></Link>
                <td>Agrego nuevo archivo al proyecto.</td>
                
              </tr>
              <tr>
                <td>2024-05-18</td>
                <Link href={"/usuarios/verproyectos/"}><td>Usuario B</td></Link>
                <td>Agrego nuevo archivo al proyecto.</td>
              </tr>
              <tr>
                <td>2024-06-12</td>
                <Link href={"/usuarios/verproyectos/"}><td>Usuario C</td></Link>
                <td>Agrego nuevo archivo al proyecto.</td>
              </tr>
              <tr>
                <td>2024-09-18</td>
                <Link href={"/usuarios/verproyectos/"}><td>Usuario D</td></Link>
                <td>Agrego nuevo archivo al proyecto.</td>
              </tr>
              <tr>
                <td>2024-07-16</td>
                <Link href={"/usuarios/verproyectos/"}><td>Usuario E</td></Link>
                <td>Agrego nuevo archivo al proyecto.</td>
              </tr>
              <tr>
                <td>2024-06-02</td>
                <Link href={"/usuarios/verproyectos/"}><td>Usuario F</td></Link>
                <td>Agrego nuevo archivo al proyecto.</td>
              </tr>
              <tr>
                <td>2024-04-06</td>
                <Link href={"/usuarios/verproyectos/"}><td>Usuario G</td></Link>
                <td>Agrego nuevo archivo al proyecto.</td>
              </tr>
              <tr>
                <td>2024-06-30</td>
                <Link href={"/usuarios/verproyectos/"}><td>Usuario H</td></Link>
                <td>Agrego nuevo archivo al proyecto.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>

      <Footer />
    </div>
  );
}