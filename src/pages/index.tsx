
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarOrganismo from "@/components/organismos/Navbar";
import CarruselOrganismo from "@/components/organismos/CarruselOrg";

export default function Home(){
  return(
    <center>
       <NavbarOrganismo/>
      <div style={{ padding: "30px", marginTop: "10px"}} >
        <CarruselOrganismo />
      </div>
    </center>
    
  )
}