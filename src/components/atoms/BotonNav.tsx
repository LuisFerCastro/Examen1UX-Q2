import React from "react";
import styles from "./BotonNav.module.css"
interface BotonAtomoProps {
  text: string;
  onClick: () => void;
  isActive: boolean;
}

const BotonNavAtomo = ({ text, onClick, isActive }: BotonAtomoProps) => (
  <button
    className={`nav-link text-white text-uppercase px-2 ${isActive ? styles.active : ""}`}
    onClick={onClick}
  >
    {text}
  </button>
);

export default BotonNavAtomo;
