import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import '../styles/Footer.css'
const Footer = (props) => {
    return (
        <footer>
            <div className="caja">
                <div className="siguenos container">
                    <p>Siguenos en nuestras redes sociales:</p>
                    <a href="https://www.facebook.com/"><FontAwesomeIcon icon={faFacebook} beat size="2xl" style={{ color: "#527dc7", }} /></a>
                    <a href="https://twitter.com/"><FontAwesomeIcon icon={faXTwitter} beat size="2xl" style={{ color: "#0f0f10", }} /></a>
                    <a href="https://www.instagram.com/"><FontAwesomeIcon icon={faInstagram} beat size="2xl" style={{ color: "#f010f4", }} /></a>
                </div>
                <div className="direccion container">
                    <p>Sucursales:</p>
                    <p>CABA: Av. Rivadavia 435</p>
                    <p>GBA-Pilar: Nicaragua 788</p>
                </div>
                <div className="contacto container">
                    <p>Contacto:</p>
                    <p><FontAwesomeIcon icon={faEnvelope} beat size="2xl" style={{ color: "#070808", }} /> bellissima_soporte@outlook.com</p>
                    <p><FontAwesomeIcon icon={faWhatsapp} beat size="2xl" style={{ color: "#00d13f", }} /> 1112345678</p>
                </div>
            </div>
            <p className="footer">Diseñado por Sergio Ruiz Diaz - &copy;2023</p>
        </footer>
    )
}
export default Footer;

