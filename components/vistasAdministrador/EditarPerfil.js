import Footer from "../common/Footer";
import Header from "../common/Header";
import "../../src/Styles/editarperfil.css";

export default function EditarPerfil() {
    return (
        <>
            <Header />
            <div className="contenedor-principal">
                <div className="contenedor-formulario">
                    <div className="titulo">¡Actualizar Perfil!</div>
                    <form className="formulario">
                        <div className="campo">
                            <label htmlFor="nombre">Nombre:</label>
                            <input type="text" id="nombre" name="nombre" required />
                        </div>

                        <div className="campo">
                            <label htmlFor="apellidos">Apellidos:</label>
                            <input type="text" id="apellidos" name="apellidos" required />
                        </div>

                        <div className="campo">
                            <label htmlFor="email">Correo Electrónico:</label>
                            <input type="email" id="email" name="email" required />
                        </div>

                        <div className="campo">
                            <label htmlFor="telefono">Número de Teléfono:</label>
                            <input type="tel" id="telefono" name="telefono" required />
                        </div>

                        <div className="campo">
                            <label htmlFor="genero">Género:</label>
                            <select id="genero" name="genero">
                                <option value="masculino">Masculino</option>
                                <option value="femenino">Femenino</option>
                            </select>
                        </div>

                        <div className="campo">
                            <label htmlFor="fechaNacimiento">Fecha de Nacimiento:</label>
                            <input type="date" id="fechaNacimiento" name="fechaNacimiento" />
                        </div>

                        <div className="campo">
                            <label htmlFor="ciudad">Ciudad:</label>
                            <input type="text" id="ciudad" name="ciudad" />
                        </div>

                        <div className="campo">
                            <label htmlFor="direccion">Dirección:</label>
                            <input type="text" id="direccion" name="direccion" />
                        </div>

                        <button type="submit">Actualizar</button>
                    </form>
                </div>
            </div>
            <Footer />
        </>
    );
}