import React, { useEffect, useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import "../styles/Nav.css";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { MdOutlineShoppingCart, MdOutlineMenu } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { RiArrowLeftSLine } from "react-icons/ri";
import OffCanvas from "./canvas";
const Nav = (props) => {
  const [showFirst, setShowFirst] = useState(false);
  const [showSecond, setShowSecond] = useState(false);
  const [showColeccion1, setShowColeccion1] = useState(false);
  const [showColeccion2, setShowColeccion2] = useState(false);

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className="Nav holder">
      <div className={`menuMobile ${scrolled ? scrolled : ""}`}>
        <div className="logoMobile">
          <img src="./img/logo.png" alt="logo" />
          <h1>
            <Link to="/">Bellissima</Link>
          </h1>
        </div>
        <div className="menuMobileButtons">
          {" "}
          <Button
            variant=""
            className="botonCarrito"
            onClick={() => setShowFirst(true)}
          >
            <MdOutlineShoppingCart size={25} />
          </Button>
          <Button
            variant="none"
            className="me-2 me2"
            onClick={() => setShowSecond(true)}
          >
            <MdOutlineMenu size={25} />
            MENÚ
          </Button>
        </div>

        <OffCanvas
          show={showFirst}
          handleClose={() => setShowFirst(false)}
          title="Carrito de compras"
          placement="end"
          className="offCanvas"
        >
          EL CARRITO DE COMPRAS ESTA VACÍO
        </OffCanvas>

        <OffCanvas
          className="offCanvas"
          show={showSecond}
          handleClose={() => setShowSecond(false)}
          title=""
          placement="end"
        >
          <div className="offcanvasContent">
            <div>
              <div className="offcanvasLinks">
                <hr />
                <Link to={"/"} onClick={() => setShowSecond(false)}>
                  Inicio
                </Link>
                <hr />
                <button
                  to={"/"}
                  onClick={() => setShowColeccion1(!showColeccion1)}
                  className="coleccionButton"
                >
                  Otoño-Invierno{" "}
                  <div>
                    <IoIosArrowDown
                      className={
                        showColeccion1
                          ? "coleccionInvisible"
                          : "coleccionVisible"
                      }
                    />
                    <RiArrowLeftSLine
                      className={
                        showColeccion1
                          ? "coleccionVisible"
                          : "coleccionInvisible"
                      }
                    />
                  </div>
                </button>
                <hr />

                <div
                  className={
                    showColeccion1 ? "coleccionVisible" : "coleccionInvisible"
                  }
                >
                  <Link to={"/abrigos"} onClick={() => setShowSecond(false)}>
                    Abrigos
                  </Link>
                  <hr />
                  <Link to={"/gorro"} onClick={() => setShowSecond(false)}>
                    Gorros/Bufandas
                  </Link>
                  <hr />
                  <Link to={"/pantalon"} onClick={() => setShowSecond(false)}>
                    Pantalon
                  </Link>
                  <hr />
                  <Link to={"/pollera"} onClick={() => setShowSecond(false)}>
                    Polleras
                  </Link>
                  <hr />
                  <Link to={"/remeras"} onClick={() => setShowSecond(false)}>
                    Remeras
                  </Link>
                  <hr />
                  <Link to={"/sweater"} onClick={() => setShowSecond(false)}>
                    Sweaters
                  </Link>
                </div>
                <button
                  to={"/"}
                  onClick={() => setShowColeccion2(!showColeccion2)}
                  className="coleccionButton"
                >
                  Primavera-Verano{" "}
                  <div>
                    <IoIosArrowDown
                      className={
                        showColeccion2
                          ? "coleccionInvisible"
                          : "coleccionVisible"
                      }
                    />
                    <RiArrowLeftSLine
                      className={
                        showColeccion2
                          ? "coleccionVisible"
                          : "coleccionInvisible"
                      }
                    />
                  </div>
                </button>
                <div
                  className={
                    showColeccion2 ? "coleccionVisible" : "coleccionInvisible"
                  }
                >
                  <hr />
                  <Link to={"/blusas"} onClick={() => setShowSecond(false)}>
                    Blusas/Remeras
                  </Link>
                  <hr />
                  <Link to={"/camisas"} onClick={() => setShowSecond(false)}>
                    Camisas
                  </Link>
                  <hr />
                  <Link to={"/gorros"} onClick={() => setShowSecond(false)}>
                    Gorros
                  </Link>
                  <hr />
                  <Link
                    to={"/pantalonpri"}
                    onClick={() => setShowSecond(false)}
                  >
                    Pantalon
                  </Link>
                  <hr />
                  <Link to={"/polleras"} onClick={() => setShowSecond(false)}>
                    Polleras
                  </Link>
                  <hr />
                  <Link to={"/vestidos"} onClick={() => setShowSecond(false)}>
                    Vestidos
                  </Link>
                </div>
                <hr />
                <Link to={"/outlet"} onClick={() => setShowSecond(false)}>
                  Outlet
                </Link>
                <hr />
                <Link to={"/accesorios"} onClick={() => setShowSecond(false)}>
                  Accesorios
                </Link>
                <hr />
                <Link to={"/supersale"} onClick={() => setShowSecond(false)}>
                  ¡Super-Sale!
                </Link>
                <hr />
                <Link to={"/contacto"} onClick={() => setShowSecond(false)}>
                  ¡Contactanos!
                </Link>
                <hr />
              </div>
              <div className="menuFondo">
                <div className="userMobile">
                  <FaRegUser className="userIcon" size={15} color="white" />
                </div>
                <div>
                  <Link
                    to={"/account/register"}
                    onClick={() => setShowSecond(false)}
                  >
                    Crear Cuenta
                  </Link>{" "}
                  |{" "}
                  <a
                    href="http://localhost:3000/admin/novedades"
                    target="_blank"
                    onClick={() => setShowSecond(false)}
                  >
                    Iniciar Sesión
                  </a>
                </div>
              </div>
            </div>
          </div>
        </OffCanvas>
      </div>
      <ul className="nav-pc">
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
          <Link to="/outlet" className="link">
            Outlet
          </Link>
        </li>
        <li>
          <Link to="/accesorios" className="link">
            Accesorios
          </Link>
        </li>
        <li>
          <Link to="/supersale" className="link">
            ¡Super-Sale!
          </Link>
        </li>
        {/* <li>
          <Link to="/novedades" className="link">
            ¡Novedades!
          </Link>
        </li> */}
        <li>
          <Link to="/contacto" className="link">
            ¡Contactanos!
          </Link>
        </li>
      </ul>
    </div>
  );
};
export default Nav;
