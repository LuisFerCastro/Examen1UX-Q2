import React from "react";
import ItemCarruselMolecula from "../molecules/ItemCarrusel";
import BotonCarrusel from "../atoms/BtnCarrusel";


const items = [
  {
    id: "item1",
    imagenFondo: "/images/GoTHoDFondo.jpg",
    imagenTitulo: "/images/GoTHoDTitle.png",
    descripcion:
      "18+ 2022 1 temporada\n Ambientada 200 años antes de Game of Thrones, esta precuela explora el auge y la caída de la Casa Targaryen, la dinastía que gobernó Westeros con dragones. ",
  },
  {
    id: "item2",
    imagenFondo: "/images/euphoriaFondo.png",
    imagenTitulo: "/images/euphoriaTitle.png",
    descripcion:
      "18+ 2019 2 temporadas\n Rue, una adolescente que lucha contra la adicción a las drogas, navega por el caos de la vida, el amor y la identidad en un mundo de fiestas salvajes, relaciones tóxicas y redes sociales. ",
  },
  {
    id: "item3",
    imagenFondo: "/images/TLoUFondo.jpg",
    imagenTitulo: "/images/TLoUTitle.png",
    descripcion:
      "18+ 2023 2 temporadas\n En un mundo devastado por un hongo parasitario que convierte a los humanos en criaturas violentas, Joel, un contrabandista endurecido, debe escoltar a Ellie, una adolescente inmune, a través de los EE.UU. en un viaje peligroso. ",
  },
  {
    id: "item4",
    imagenFondo: "/images/TrueDFondo.jpg",
    imagenTitulo: "/images/TrueDTitle.png",
    descripcion:
      "18+ 2024 1 temporada\n En el gélido y eternamente oscuro invierno de Alaska, dos detectiveas, Liz Danvers (Jodie Foster) y Evangeline Navarro (Kali Reis), investigan la desaparición de ocho científicos de una remota estación de investigación. ",
  },
  {
    id: "item5",
    imagenFondo: "/images/HacksFondo.jpg",
    imagenTitulo: "/images/HacksTitle.png",
    descripcion:
      "TV-MA 2021 3 temporadas\n Una comedia ácida que sigue a Deborah Vance (Jean Smart), una legendaria cómica en decadencia, y a Ava (Hannah Einbinder), una joven escritora cancelada por un tweet polémico. ",
  },
  {
    id: "item6",
    imagenFondo: "/images/TRFondo.jpg",
    imagenTitulo: "/images/TRTitle.png",
    descripcion:
      "TV-MA 2024 1 temporada\n Una sátira política oscura protagonizada por Kate Winslet como Elena Vernham, la excéntrica y paranoica líder de un régimen autoritario en un país ficticio de Europa del Este.",
  },
];

const CarruselOrganismo = () => {
  const targetId = "carruselHBO";

  return (
    <div
      id={targetId}
      className="carousel slide carousel-fade"
      data-bs-ride="carousel"
      style={{ maxHeight: "60vh" }}
    >
      <div className="carousel-inner">
        {items.map((item, idx) => (
          <ItemCarruselMolecula
            key={item.id}
            id={item.id}
            imagenFondo={item.imagenFondo}
            imagenTitulo={item.imagenTitulo}
            descripcion={item.descripcion}
            active={idx === 0}
          />
        ))}
      </div>
      <BotonCarrusel direccion="prev" targetId={targetId} />
      <BotonCarrusel direccion="next" targetId={targetId} />
    </div>
  );
};

export default CarruselOrganismo;