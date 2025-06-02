// src/pages/MovieCatalogPage.tsx
import React from "react";
import HorizontalGallery from "@/components/organismos/HorizontalGallery";
import { Badge } from "react-bootstrap";

const images = [
  { src: "https://www.bluedogposters.com.au/cdn/shop/products/21564_1400x.jpg?v=1605574346", alt: "Película 1", badge: "Nuevo"},
  { src: "https://play-lh.googleusercontent.com/_57MpqNEKaLVbZIouQG1scgvVynYZxoMAE9TtBPRrkketrA6zX_LrddKvC1uLL_u8EE", alt: "Película 2" },
  { src: "https://beam-images.warnermediacdn.com/BEAM_LWM_DELIVERABLES/67e940b7-aab2-46ce-a62b-c7308cde9de7/5e0eb82b-78fd-4570-b86a-1e3bcac3b16e?host=wbd-images.prod-vod.h264.io&partner=beamcom&w=320", alt: "Película 3",badge:"Nuevo Episodio" },
  { src: "https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2017/06/9E2y5Q7WlCVNEhP5GiVTjhEhx1o.jpg", alt: "Película 4"  ,badge: "se va pronto"},
  { src: "https://musicart.xboxlive.com/7/17385100-0000-0000-0000-000000000002/504/image.jpg", alt: "Película 5" },
  { src: "https://pics.filmaffinity.com/Dune_La_profecaia_Serie_de_TV-764121665-large.jpg", alt: "Película 6" },
  { src: "https://play-lh.googleusercontent.com/hBJ9Fg4LbD9EdWmZTuYDY4ekxPuusJv3XuJ_BxSmsRwnhOMmdH31eK4vzd_dDGuj25L0wQ", alt: "Película 7" },
  { src: "https://pics.filmaffinity.com/The_Batman-286145671-large.jpg", alt: "Película 8", badge:"Nuevos Episodios" },
  { src: "https://s3-ap-southeast-2.amazonaws.com/assets.allenandunwin.com/images/original/9780571379750.jpg", alt: "Película 9" },
  { src: "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p17518238_b_v12_ah.jpg", alt: "Película 10",badge:"Nuevo" },
];

export default function MovieCatalogPage() {
  return (
    <div style={{ background: "#0c0c0c", minHeight: "100vh", color: "#fff" }}>
      <h2 className="text-start text-md-start">Destacadas</h2>
      <HorizontalGallery images={images} />
    </div>
  );
}
