import React, { useRef } from "react";
import MovieCard from "../molecules/MovieCard";

type Props = {
  images: { src: string; alt?: string; badge?: string }[];
};

export default function HorizontalGallery({ images }: Props) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount = clientWidth * 0.8;

      scrollRef.current.scrollTo({
        left: direction === "left" ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div style={{ position: "relative", padding: "24px 0" }}>
      {/* Botón izquierda */}
      <button
        onClick={() => scroll("left")}
        style={{
          position: "absolute",
          top: "50%",
          left: "0",
          transform: "translateY(-50%)",
          background: "rgba(0,0,0,0.5)",
          color: "white",
          border: "none",
          fontSize: "2rem",
          padding: "8px 12px",
          cursor: "pointer",
          zIndex: 2,
        }}
      >
        ‹
      </button>

      {/* Contenedor scroll horizontal */}
      <div
        ref={scrollRef}
        style={{
          overflowX: "scroll",
          display: "flex",
          gap: "16px",
          scrollBehavior: "smooth",
          padding: "0 48px", // espacio para los botones
          scrollbarWidth: "none", // Firefox
        }}
        className="no-scrollbar" // Para ocultarlo con Tailwind si usas Tailwind
      >
        {images.map((image, index) => (
          <MovieCard
            key={index}
            src={image.src}
            alt={image.alt}
            badge={image.badge}
          />
        ))}
      </div>

      {/* Botón derecha */}
      <button
        onClick={() => scroll("right")}
        style={{
          position: "absolute",
          top: "50%",
          right: "0",
          transform: "translateY(-50%)",
          background: "rgba(0,0,0,0.5)",
          color: "white",
          border: "none",
          fontSize: "2rem",
          padding: "8px 12px",
          cursor: "pointer",
          zIndex: 2,
        }}
      >
        ›
      </button>
    </div>
  );
}
