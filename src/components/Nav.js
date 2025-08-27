import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import "../styles/Nav.css";
import { Link } from "react-router-dom";
const Nav = (props) => {
  return (
    <div className="Nav holder">
      <ul>
        <li>
          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              Otoño-Invierno
            </Dropdown.Toggle>

            <Dropdown.Menu className="lista">
              <Dropdown.Item as={Link} to="/abrigos">
                Abrigos
              </Dropdown.Item>
              <Dropdown.Item as={Link} to="/gorro">
                Gorros/Bufandas
              </Dropdown.Item>
              <Dropdown.Item as={Link} to="/pantalon">
                Pantalon
              </Dropdown.Item>
              <Dropdown.Item as={Link} to="/pollera">
                Polleras
              </Dropdown.Item>
              <Dropdown.Item as={Link} to="/remeras">
                Remeras
              </Dropdown.Item>
              <Dropdown.Item as={Link} to="/sweater">
                Sweater
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </li>
        <li>
          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              Primavera-Verano
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item as={Link} to="/blusas">
                Blusas/Remeras
              </Dropdown.Item>
              <Dropdown.Item as={Link} to="/camisas">
                Camisas
              </Dropdown.Item>
              <Dropdown.Item as={Link} to="/gorros">
                Gorros
              </Dropdown.Item>
              <Dropdown.Item as={Link} to="/pantalonpri">
                Pantalon
              </Dropdown.Item>
              <Dropdown.Item as={Link} to="/polleras">
                Polleras
              </Dropdown.Item>
              <Dropdown.Item as={Link} to="/vestidos">
                Vestidos
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </li>
        <li>
          <Link to="/outlet" class="link">
            Outlet
          </Link>
        </li>
        <li>
          <Link to="/accesorios" class="link">
            Accesorios
          </Link>
        </li>
        <li>
          <Link to="/supersale" class="link">
            ¡Super-Sale!
          </Link>
        </li>
        {/* <li>
          <Link to="/novedades" class="link">
            ¡Novedades!
          </Link>
        </li> */}
        <li>
          <Link to="/contacto" class="link">
            ¡Contactanos!
          </Link>
        </li>
      </ul>
    </div>
  );
};
export default Nav;
