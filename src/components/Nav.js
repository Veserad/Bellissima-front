import React from "react";

import Dropdown from 'react-bootstrap/Dropdown';

import '../styles/Nav.css'
import { Link } from "react-router-dom";
const Nav = (props) => {
    return (
        <div className='Nav holder'>
            <ul>
                <li>
                    <Dropdown>
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                            Otoño-Invierno
                        </Dropdown.Toggle>

                        <Dropdown.Menu className='lista'>
                            <Dropdown.Item href="/abrigos">Abrigos</Dropdown.Item>
                            <Dropdown.Item href="/gorro">Gorros/Bufandas</Dropdown.Item>
                            <Dropdown.Item href="/pantalon">Pantalon</Dropdown.Item>
                            <Dropdown.Item href="/pollera">Polleras</Dropdown.Item>
                            <Dropdown.Item href="/remeras">Remeras</Dropdown.Item>
                            <Dropdown.Item href="/sweater">Sweater</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </li>
                <li>
                    <Dropdown>
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                            Primavera-Verano
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item href="/blusas">Blusas/Remeras</Dropdown.Item>
                            <Dropdown.Item href="/camisas">Camisas</Dropdown.Item>
                            <Dropdown.Item href="/gorros">Gorros</Dropdown.Item>
                            <Dropdown.Item href="/pantalonpri">Pantalon</Dropdown.Item>
                            <Dropdown.Item href="/polleras">Polleras</Dropdown.Item>
                            <Dropdown.Item href="/vestidos">Vestidos</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </li>
                <li>
                    <Link to="/outlet" class="link">Outlet</Link>
                </li>
                <li>
                    <Link to="/accesorios" class="link">Accesorios</Link>
                </li>
                <li>
                    <Link to="/supersale" class="link">¡Super-Sale!</Link>
                </li>
                <li>
                    <Link to="/novedades" class="link">¡Novedades!</Link>
                </li>
                <li>
                    <Link to="/contacto" class="link">¡Contactanos!</Link>
                </li>
            </ul>
        </div>
    );
}
export default Nav;