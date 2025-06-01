import React from "react";

interface LogoAtomoProps {
  src: string;
  alt?: string;
}

const LogoAtomo = ({ src, alt = "Logo" }: LogoAtomoProps) =>{
  return (
    <img
      src={src}
      alt={alt}
      style={{ height: "40px", cursor: "pointer" }}
      className="me-3"
    />
  );
}

export default LogoAtomo;