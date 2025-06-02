import React from "react";
import PosterImage2 from "../atoms/PosterImage";

type Props = {
  src: string;
  alt?: string;
  badge?: string;
};

export default function MovieCard({ src, alt, badge }: Props) {
  return (
    <div
      style={{
        position: "relative",
        flex: "0 0 auto",
        width: "250px",
        marginRight: "16px",
        transition: "border-color 0.3s ease",
        cursor: "pointer",
        border: "2px solid transparent",
        borderRadius: "8px",
        overflow: "hidden",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = "white";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = "transparent";
      }}
    >
      {badge && (
        <div
          style={{
            position: "absolute",
            top: "8px",
            left: "8px",
            backgroundColor: "white",
            color: "black",
            padding: "4px 8px",
            fontSize: "0.75rem",
            fontWeight: "bold",
            borderRadius: "4px",
            zIndex: 1,
          }}
        >
          {badge}
        </div>
      )}
      <PosterImage2 src={src} alt={alt} />
    </div>
  );
}
