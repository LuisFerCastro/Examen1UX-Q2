import React from "react";
import PosterProgreso from "../molecules/PosterProgreso";

type GaleriaProps = {
  items: { src: string; alt: string; progress: number; description: string }[];
};

const ContinuarViendoGaleria = ({ items }: GaleriaProps) =>{
  return (
    <div className="container">
      <h3 style={{fontFamily: "'Poppins', sans-serif"}}>Continuar viendo</h3>
      <div className="row gx-3 gy-4">
        {items.map((item, idx) => (
          <div key={idx} className="col-6 col-sm-4 col-md-3 col-lg-2">
            <PosterProgreso
              src={item.src}
              alt={item.alt}
              progress={item.progress}
              description={item.description}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
export default ContinuarViendoGaleria;