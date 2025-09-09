import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSackDollar } from "@fortawesome/free-solid-svg-icons";

import "../styles/Header.css";
import { Link } from "react-router-dom";

const Header = (props) => {
  return (
    <header className="holder">
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"
        integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA=="
        crossorigin="anonymous"
        referrerpolicy="no-referrer"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Agbalumo&family=Open+Sans:wght@300;400;700&display=swap"
        rel="stylesheet"
      ></link>
      <div className="descuento">
        <p>¡Envío gratis en compras a partir de $15.000!</p>
        <FontAwesomeIcon
          icon={faSackDollar}
          bounce
          size="2xl"
          style={{ color: "#16ca43" }}
        />
      </div>
      <div className="boton botonMobile">
        <button type="submit" className="btn btn-outline-danger btn-lg">
          <a
            href="http://localhost:3000/admin/novedades"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h3>
              Ingresar <i class="fa-solid fa-right-to-bracket"></i>
            </h3>
          </a>
        </button>
      </div>
      <div className="logo">
        <img src={`${process.env.PUBLIC_URL}/img/logo.png`} alt="logo" />
        <h1>
          <Link to="/">Bellissima</Link>
        </h1>
      </div>
    </header>
  );
};
export default Header;
