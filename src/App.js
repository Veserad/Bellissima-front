import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";

import Footer from "./components/Footer";
import Header from "./components/Header";
import Nav from "./components/Nav";

import Home from "./pages/Home";
import Accesorios from "./pages/Accesorios";
import Outlet from "./pages/Outlet";
import Supersale from "./pages/Supersale";
import Abrigos from "./pages/ot-in/Abrigos";
import Gorrobufanda from "./pages/ot-in/Gorrobufanda";
import Pantalon from "./pages/ot-in/Pantalon";
import Pollera from "./pages/ot-in/Pollera";
import Remeras from "./pages/ot-in/Remeras";
import Sweater from "./pages/ot-in/Sweater";
import Blusasremeras from "./pages/pri-ver/Blusasremeras";
import Camisas from "./pages/pri-ver/Camisas";
import Gorros from "./pages/pri-ver/Gorros";
import Pantaloninv from "./pages/pri-ver/Pantaloninv";
import Polleras from "./pages/pri-ver/Polleras";
import Vestidos from "./pages/pri-ver/Vestidos";
import NovedadesPage from "./pages/NovedadesPage";
import Contacto from "./pages/Contacto";

import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter basename="/Bellissima-front">
        <Header />
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/accesorios" element={<Accesorios />} />
          <Route path="/outlet" element={<Outlet />} />
          <Route path="/supersale" element={<Supersale />} />
          <Route path="/abrigos" element={<Abrigos />} />
          <Route path="/gorro" element={<Gorrobufanda />} />
          <Route path="/pantalon" element={<Pantalon />} />
          <Route path="/pollera" element={<Pollera />} />
          <Route path="/remeras" element={<Remeras />} />
          <Route path="/sweater" element={<Sweater />} />
          <Route path="/blusas" element={<Blusasremeras />} />
          <Route path="/camisas" element={<Camisas />} />
          <Route path="/gorros" element={<Gorros />} />
          <Route path="/pantalonpri" element={<Pantaloninv />} />
          <Route path="/polleras" element={<Polleras />} />
          <Route path="/vestidos" element={<Vestidos />} />
          <Route path="/novedades" element={<NovedadesPage />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
