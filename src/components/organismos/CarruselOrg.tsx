import React from "react";
import ItemCarruselMolecula from "../molecules/ItemCarrusel";
import { useState, useEffect, useRef } from "react";
import BotonCarrusel from "../atoms/BtnCarrusel";
interface Slide {
  imagenSrc: string;
  titulo: string;
  descripcion: string;
}

interface CarruselOrganismoProps {
  id: string;
  slides: Slide[];
  intervalo?: number;
}

const CarruselOrganismo = ({ id, slides, intervalo = 5000 }: CarruselOrganismoProps) => {
  const [slideActivo, setSlideActivo] = useState(0);
  const intervaloRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    intervaloRef.current = setInterval(() => {
      setSlideActivo((prev) => (prev + 1) % slides.length);
    }, intervalo);

    return () => {
      if (intervaloRef.current) clearInterval(intervaloRef.current);
    };
  }, [slides.length, intervalo]);

  const cambiarSlide = (nuevoIndex: number) => {
    setSlideActivo(nuevoIndex);
    if (intervaloRef.current) {
      clearInterval(intervaloRef.current);
      intervaloRef.current = setInterval(() => {
        setSlideActivo((prev) => (prev + 1) % slides.length);
      }, intervalo);
    }
  };

  return (
    <div id={id} className="carousel slide" data-bs-ride="carousel" style={{ maxHeight: "600px", overflow: "hidden" }}>
      <div className="carousel-inner">
        {slides.map((slide, i) => (
          <ItemCarruselMolecula
            key={i}
            imagenSrc={slide.imagenSrc}
            titulo={slide.titulo}
            descripcion={slide.descripcion}
            activo={i === slideActivo}
          />
        ))}
      </div>

      
      <div
        className="carousel-indicators"
        style={{ bottom: "10px" }}
      >
        {slides.map((_, i) => (
          <button
            key={i}
            type="button"
            data-bs-target={`#${id}`}
            data-bs-slide-to={i}
            className={i === slideActivo ? "active" : ""}
            aria-current={i === slideActivo ? "true" : undefined}
            aria-label={`Slide ${i + 1}`}
            onClick={() => cambiarSlide(i)}
            style={{
              backgroundColor: i === slideActivo ? "white" : "gray",
              borderRadius: "50%",
              width: "12px",
              height: "12px",
              margin: "0 6px",
              border: "none",
              cursor: "pointer",
            }}
          />
        ))}
      </div>

      
      <BotonCarrusel direccion="prev" targetId={id} />
      <BotonCarrusel direccion="next" targetId={id} />
    </div>
  );
};

export default CarruselOrganismo;