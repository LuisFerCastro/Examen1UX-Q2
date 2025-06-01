import React from "react";
import IconoBusquedaAtomo from "../atoms/IconoBusqueda";
import IconoPerfilAtomo from "../atoms/IconoPerfil";

const BarraAccionesMolecula =() =>{
  return (
    <div className="d-flex align-items-center">
      <IconoBusquedaAtomo/>
      <IconoPerfilAtomo/>
    </div>
  );
}

export default BarraAccionesMolecula;
