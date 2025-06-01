
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarOrganismo from "@/components/organismos/Navbar";
import CarruselOrganismo from "@/components/organismos/CarruselOrg";
const slides = [
  {
    imagenSrc: "https://upload.wikimedia.org/wikipedia/en/d/d8/Game_of_Thrones_title_card.jpg",
    titulo: "Game of throwns",
    descripcion: "Un grupo de niños descubre secretos en su pequeño pueblo.",
  },
  {
    imagenSrc: "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p16792512_b_v13_ae.jpg",
    titulo: "The Witcher",
    descripcion: "Aventuras épicas en un mundo de magia y monstruos.",
  },
  {
    imagenSrc: "https://m.media-amazon.com/images/M/MV5BOTU2YmM5ZjctOGVlMC00YTczLTljM2MtYjhlNGI5YWMyZjFkXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    titulo: "Euphoria",
    descripcion: "Historias intensas de jóvenes enfrentando la vida.",
  },
];
export default function Home(){
  return(
    <center>
       <NavbarOrganismo/>
      <div style={{ padding: "30px",marginTop: "70px"}} >
        <CarruselOrganismo id="carruselHBO" slides={slides} intervalo={6000} />
      </div>
    </center>
    
  )
}