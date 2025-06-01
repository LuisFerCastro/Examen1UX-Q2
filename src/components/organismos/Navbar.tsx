import React from "react";
import { useState } from "react";
import LogoAtomo from "../atoms/Logo";
import IconoMenuAtomo from "../atoms/IconoMenu";
import BotonNavAtomo from "../atoms/BotonNav";
import BarraAccionesMolecula from "../molecules/BarradeAcciones";
import styles from './Navbar.module.css';

const items = ["Inicio", "Series", "Películas", "HBO", "Niños y familia"];

const NavbarOrganismo = () => {
  const [activeItem, setActiveItem] = useState("Inicio");

  return (
    <nav className={`navbar navbar-expand-lg fixed-top ${styles.navbar}`}>
      <div className="container-fluid">
        <LogoAtomo src="https://beam-images.warnermediacdn.com/2025-03/max_iridescent-white_logo_small_rgb-width700px.png?host=wbd-dotcom-drupal-prd-us-east-1.s3.amazonaws.com"/>
        <IconoMenuAtomo targetId="navbarContent" />
        <div className="collapse navbar-collapse" id="navbarContent">
          <ul className={`navbar-nav mx-auto ${styles.navItems}`}>
            {items.map((item) => (
              <li className="nav-item" key={item}>
                <BotonNavAtomo
                  text={item}
                  onClick={() => setActiveItem(item)}
                  isActive={activeItem === item}
                />
              </li>
            ))}
          </ul>
          <div className="d-flex gap-3">
            <BarraAccionesMolecula/>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavbarOrganismo;