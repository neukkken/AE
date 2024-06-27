import React from "react";
import "../../../src/Styles/dropcampesinos.css";
import CardRequest from "../../common/CardRequest";

const UsuariosRegistrados = ({ usuarios }) => {
  return (
    <>
      <div className="nuevosUsuarios">
        {usuarios.map((usuario) => (
          <CardRequest key={usuario.id} usuario={usuario} />
        ))}
      </div>
    </>
  );
};

export default UsuariosRegistrados;
