import React from "react";
import IndicadorProgreso from "../atoms/IndicadorProgress";
import styles from "./PosterProgreso.module.css";

type ProgresoProps = {
  src: string;
  alt?: string;
  progress: number;
  description: string;
};

const PosterProgreso = ({ src, alt, progress, description }: ProgresoProps) =>{
  return (
    <div className={styles.posterContainer}>
      <img src={src} alt={alt} className={styles.posterImage} />
      <IndicadorProgreso progress={progress} />
      <p className="text-white mt-1 mb-0 small">{description}</p>
    </div>
  );
}
export default PosterProgreso;