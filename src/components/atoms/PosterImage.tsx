// src/components/atoms/PosterImage.tsx
import React from "react";

type Props = {
  src: string;
  alt?: string;
};

// PosterImage.tsx
export default function PosterImage({ src, alt }: { src: string; alt?: string }) {
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

