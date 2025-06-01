import React from "react";
import BotonVerSerie from "../atoms/BtnSerie";
interface ItemCarruselMoleculaProps {
  imagenSrc: string;
  titulo: string;
  descripcion: string;
  activo: boolean;
}

const ItemCarruselMolecula = ({ imagenSrc, titulo, descripcion, activo }: ItemCarruselMoleculaProps) => (
  <div className={`carousel-item ${activo ? "active" : ""}`}>
    <img
      src={imagenSrc}
      className="d-block w-100"
      alt={titulo}
      style={{ maxHeight: "600px", objectFit: "cover", filter: "brightness(0.7)" }}
    />
    <div
      className="carousel-caption d-flex flex-column justify-content-center align-items-start text-start"
      style={{
        bottom: "20%",
        left: "5%",
        maxWidth: "600px",
        textShadow: "2px 2px 8px rgba(0,0,0,0.9)",
      }}
    >
      <h1 style={{ fontWeight: "bold", fontSize: "3rem" }}>{titulo}</h1>
      <p style={{ fontSize: "1.2rem", marginBottom: "1.5rem" }}>{descripcion}</p>
      <BotonVerSerie />
    </div>
  </div>
);

export default ItemCarruselMolecula;