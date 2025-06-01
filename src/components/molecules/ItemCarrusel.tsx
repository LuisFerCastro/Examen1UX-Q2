import React from "react";
import styles from "./Carrusel.module.css"

interface ItemCarruselProps {
  imageUrl: string;
  description: string;
  buttonText: string;
  isActive?: boolean; // Para manejar la clase active en el slide inicial
}

interface ItemCarruselMoleculaProps {
  imagenFondo: string;
  imagenTitulo: string;
  descripcion: string;
  id: string;
  active?: boolean;
}

const ItemCarruselMolecula = ({
  imagenFondo,
  imagenTitulo,
  descripcion,
  id,
  active = false,
}: ItemCarruselMoleculaProps) => {
  return (
    <div
      className={`carousel-item ${active ? "active" : ""}`}
      id={id}
    >
      <img
        src={imagenFondo}
        className={`d-block w-100 ${styles.carruselImagen}`}
        alt="Fondo del carrusel"
      />
      <div className={styles.carruselDescripcion}>
        <img
          src={imagenTitulo}
          alt="Título de la serie"
          className={styles.carruselTituloImagen}
        />
        <p className={styles.descripcionTexto}>
          {descripcion.split("\n").map((linea, i) => (
            <span key={i}>
              {linea}
              <br />
            </span>
          ))}
        </p>
        <button className="btn btn-primary mt-3" style={{backgroundColor:"rgba(50, 50, 50, 0.9)"}}>Ir a la serie</button>
      </div>
    </div>
  );
};

export default ItemCarruselMolecula;