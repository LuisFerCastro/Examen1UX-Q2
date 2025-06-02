import React from "react";

type PosterImageProps = {
  src: string;
  alt?: string;
};

 const PosterImage = ({ src, alt }: PosterImageProps) =>{
  return (
    <img
      src={src}
      alt={alt}
      style={{
        width: "100%",
        height: "auto",
        display: "block",
        borderRadius: "8px",
      }}
    />
  );
}
export default PosterImage;
