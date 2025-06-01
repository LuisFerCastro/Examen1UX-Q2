import React from "react";

interface BotonCarruselProps {
  direccion: "prev" | "next";
  targetId: string;
}

const BotonCarrusel = ({ direccion, targetId }: BotonCarruselProps) => (
  <button
    className={`carousel-control-${direccion} btn btn-link text-white`}
    type="button"
    data-bs-target={`#${targetId}`}
    data-bs-slide={direccion}
    aria-label={direccion === "prev" ? "Previous" : "Next"}
    style={{ fontSize: "2.5rem", opacity: 0.7}}
  >
    {direccion === "prev" ? "‹" : "›"}
  </button>
);

export default BotonCarrusel;