import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import "../styles/Home.css";

const Home = (props) => {
  return (
    <div className="home">
      <Carousel>
        <Carousel.Item>
          {/* <ExampleCarouselImage text="First slide" /> */}
          <img
            src="./img/index/banner1.png"
            height="100%"
            width="100%"
            alt="sale"
          />
          {/* <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item>
          {/* <ExampleCarouselImage text="Second slide" /> */}
          <img
            src="./img/index/banner2.png"
            height="100%"
            width="100%"
            alt="70off"
          />
        </Carousel.Item>
        <Carousel.Item>
          {/* <ExampleCarouselImage text="Third slide" /> */}
          <img
            src="./img/index/banner3.png"
            height="100%"
            width="100%"
            alt="tarjetas"
          />
          <Carousel.Caption className="tarjeta">
            <h3>¡Aceptamos todas las tarjetas!</h3>
            <p>Promociones exclusivas y hasta 12 cuotas sin interés</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <div className="catalogos">
        <Card className="Card" style={{ maxWidth: "45%" }}>
          <Card.Img variant="top" src="img/pri-ver/blusa1.jpg" />
          <Card.Body>
            <Card.Title>Blusas</Card.Title>
            <Card.Text>$10.000</Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroup.Item>Varios talles</ListGroup.Item>
            <ListGroup.Item>Distintos colores</ListGroup.Item>
            <ListGroup.Item>Tela a elección</ListGroup.Item>
          </ListGroup>
          <Card.Body>
            <button
              className="comprar"
              onClick={() => {
                alert(
                  "Debes iniciar sesión para poder comprar y/o añadir productos a tu carrito"
                );
              }}
            >
              Añadir al carrito
            </button>
          </Card.Body>
        </Card>
        <Card className="Card" style={{ maxWidth: "45%" }}>
          <Card.Img variant="top" src="img/ot-in/abrigo1.jpg" />
          <Card.Body>
            <Card.Title>Abrigos</Card.Title>
            <Card.Text>$10.000</Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroup.Item>Varios talles</ListGroup.Item>
            <ListGroup.Item>Distintos colores</ListGroup.Item>
            <ListGroup.Item>Tela a elección</ListGroup.Item>
          </ListGroup>
          <Card.Body>
            <button
              className="comprar"
              onClick={() => {
                alert(
                  "Debes iniciar sesión para poder comprar y/o añadir productos a tu carrito"
                );
              }}
            >
              Añadir al carrito
            </button>
          </Card.Body>
        </Card>
        <Card className="Card" style={{ maxWidth: "45%" }}>
          <Card.Img variant="top" src="img/accesorios/vincha.jpg" />
          <Card.Body>
            <Card.Title>Accesorios</Card.Title>
            <Card.Text>$10.000</Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroup.Item>Varios talles</ListGroup.Item>
            <ListGroup.Item>Distintos colores</ListGroup.Item>
            <ListGroup.Item>Tela a elección</ListGroup.Item>
          </ListGroup>
          <Card.Body>
            <button
              className="comprar"
              onClick={() => {
                alert(
                  "Debes iniciar sesión para poder comprar y/o añadir productos a tu carrito"
                );
              }}
            >
              Añadir al carrito
            </button>
          </Card.Body>
        </Card>
        <Card className="Card" style={{ maxWidth: "45%" }}>
          <Card.Img variant="top" src="img/outlet/cartera.jpg" />
          <Card.Body>
            <Card.Title>Outlets</Card.Title>
            <Card.Text>$10.000</Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroup.Item>Varios talles</ListGroup.Item>
            <ListGroup.Item>Distintos colores</ListGroup.Item>
            <ListGroup.Item>Tela a elección</ListGroup.Item>
          </ListGroup>
          <Card.Body>
            <button
              className="comprar"
              onClick={() => {
                alert(
                  "Debes iniciar sesión para poder comprar y/o añadir productos a tu carrito"
                );
              }}
            >
              Añadir al carrito
            </button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};
export default Home;
