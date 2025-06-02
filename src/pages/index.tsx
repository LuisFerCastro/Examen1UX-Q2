
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarOrganismo from "@/components/organismos/Navbar";
import CarruselOrganismo from "@/components/organismos/CarruselOrg";
import MovieCatalogPage2 from "./MovieCatalogPage2";
import MovieCatalogPage from "./MovieCatalogPage";
import CatalogoContinuarV from "./CatalogoCV";
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home(){
  return (
    <>
      <NavbarOrganismo />
      <div style={{ padding: "30px", marginTop: "10px" }}>
        <CarruselOrganismo />

        <div style={{ marginTop: "48px" }}>
          <React.StrictMode>
            <MovieCatalogPage />
          </React.StrictMode>
        </div>

        <React.StrictMode>
          <MovieCatalogPage2 />
        </React.StrictMode>

        <React.StrictMode>
          <CatalogoContinuarV />
        </React.StrictMode>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </div>
    </>
  );
}