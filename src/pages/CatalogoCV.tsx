import React from "react";
import ContinuarViendoGaleria from "@/components/organismos/GaleriaContinuarV";

const watchingData = [
  { src: "/images/RickandMorty.jpg", alt: "Rick & Morty", progress: 45, description: "Rick & Morty TV-14 S3E6" },
  { src: "/images/DuneP.jpg", alt: "Dune", progress: 78, description: "Dune: Prophecy PG-13" },
  { src: "/images/It.jpg", alt: "It", progress: 25, description: "It 18+ 2017" },
];

const CatalogoContinuarV=() =>{
  return (
    <div className="text-white py-4">
      <ContinuarViendoGaleria items={watchingData} />
    </div>
  );
}
export default CatalogoContinuarV;