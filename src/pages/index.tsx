
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarOrganismo from "@/components/organismos/Navbar";
import CarruselOrganismo from "@/components/organismos/CarruselOrg";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import MovieCatalogPage2 from "./MovieCatalogPage2";
import MovieCatalogPage from "./MovieCatalogPage";

export default function Home(){
  return(
    <center>
       <NavbarOrganismo/>
      <div style={{ padding: "30px", marginTop: "10px"}} >
        <CarruselOrganismo />
         <React.StrictMode>
            <MovieCatalogPage />
        </React.StrictMode>
        <React.StrictMode>
            <MovieCatalogPage2 />
        </React.StrictMode>
      </div>
    </center>
    
  )
}