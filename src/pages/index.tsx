
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
//import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import NavbarOrganismo from "@/components/organismos/Navbar";

export default function Home(){
  
  const handleMenuClick = (item: string) => {
    alert(`Seleccionaste: ${item}`);
  };
  return(
    <center>
       <NavbarOrganismo/>
      <div style={{ padding: "20px"}} >
        
      </div>
    </center>
  )
}