import React from "react";

interface IconoMenuAtomoProps {
  targetId: string;
}

const IconoMenuAtomo = ({ targetId }: IconoMenuAtomoProps) =>{
  return (
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target={`#${targetId}`}
      aria-controls={targetId}
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon"></span>
    </button>
  );
}

export default IconoMenuAtomo;