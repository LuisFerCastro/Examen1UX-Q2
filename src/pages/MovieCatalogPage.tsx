import React from "react";
import HorizontalGallery from "@/components/organismos/HorizontalGallery";


const images = [
  { src: "/images/RickandMorty.jpg", alt: "Película 1", badge: "Nuevo"},
  { src: "/images/MiedoProfundo.jpg", alt: "Película 2" },
  { src: "/images/Hacks.jpg", alt: "Película 3",badge:"Nuevo Episodio" },
  { src: "/images/It.jpg", alt: "Película 4"  ,badge: "Se Va Pronto"},
  { src: "/images/It2.jpg", alt: "Película 5" },
  { src: "/images/DuneP.jpg", alt: "Película 6" },
  { src: "/images/LNDD3.jpg", alt: "Película 7" },
  { src: "/images/Succesion.jpg", alt: "Película 8", badge:"Nuevos Episodios" },
  { src: "/images/Batman.jpg", alt: "Película 9" },
  { src: "/images/Outsider.jpg", alt: "Película 10",badge:"Nuevo" },
];

export default function MovieCatalogPage() {
  return (
    <div style={{ background: "#0c0c0c", minHeight: "60vh", color: "#fff" }}>
      <h2 className="text-start text-md-start" style={{fontFamily: "'Poppins', sans-serif"}}>Destacados</h2>
      <HorizontalGallery images={images} />
    </div>
  );
}
