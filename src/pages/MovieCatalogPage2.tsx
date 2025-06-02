import React from "react";
import HorizontalGallery from "@/components/organismos/HorizontalGallery";


const images = [
  { src: "/images/DestinoFinal5.jpg", alt: "Película 1"},
  { src: "/images/BigBang.jpg", alt: "Película 2" },
  { src: "/images/RobotS.jpg", alt: "Película 3",badge: "Nuevo" },
  { src: "/images/GoT.jpg", alt: "Película 4"},
  { src: "/images/Chernobyl.jpg", alt: "Película 5" },
  { src: "/images/SP.jpg", alt: "Película 6" },
  { src: "/images/Chespirito.jpg", alt: "Película 7" },
  { src: "/images/gumball.jpg", alt: "Película 8" },
  { src: "/images/Sopranos.jpg", alt: "Película 9",badge: "Nuevos Episodios" },
  { src: "/images/adventure.jpg", alt: "Película 10" },
];

export default function MovieCatalogPage() {
  return (
    <div style={{ background: "#0c0c0c", minHeight: "60vh", color: "#fff"}}>
      <h2 className="text-start text-md-start"style={{fontFamily: "'Poppins', sans-serif"}}>Solo para ti</h2>
      <HorizontalGallery images={images} />
    </div>
  );
}
