import React from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import "../styles/Catalogo.css";

const Supersale = (props) => {
  return (
    <div className="catalogo">
      <Card className="Card" style={{ width: "18rem" }}>
        <Card.Img variant="top" src="img/sale/vestido.jpg" />
        <Card.Body>
          <Card.Title>Vestido</Card.Title>
          <Card.Text>
            <del>$10.000</del>
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>$7.500</ListGroup.Item>
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

      <Card className="Card" style={{ width: "18rem" }}>
        <Card.Img variant="top" src="img/sale/pollera.jpg" />
        <Card.Body>
          <Card.Title>Pollera</Card.Title>
          <Card.Text>
            <del>$7.000</del>
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>$5.000</ListGroup.Item>
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

      <Card className="Card" style={{ width: "18rem" }}>
        <Card.Img variant="top" src="img/sale/blusa.webp" />
        <Card.Body>
          <Card.Title>Blusa</Card.Title>
          <Card.Text>
            <del>$7.000</del>
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>$5.000</ListGroup.Item>
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

      <Card className="Card" style={{ width: "18rem" }}>
        <Card.Img variant="top" src="img/sale/sweater.webp" />
        <Card.Body>
          <Card.Title>Sweater</Card.Title>
          <Card.Text>
            <del>$8.000</del>
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>$6.500</ListGroup.Item>
          <ListGroup.Item>Distintos colores</ListGroup.Item>
          <ListGroup.Item>Talle a elección</ListGroup.Item>
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

      <Card className="Card" style={{ width: "18rem" }}>
        <Card.Img variant="top" src="img/sale/pantalon.jpg" />
        <Card.Body>
          <Card.Title>Pantalon</Card.Title>
          <Card.Text>
            <del>$8.500</del>
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>$6.000</ListGroup.Item>
          <ListGroup.Item>Distintos colores</ListGroup.Item>
          <ListGroup.Item>Talle a elección</ListGroup.Item>
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

      <Card className="Card" style={{ width: "18rem" }}>
        <Card.Img variant="top" src="img/sale/abrigo.jpg" />
        <Card.Body>
          <Card.Title>Abrigo</Card.Title>
          <Card.Text>
            <del>$80.000</del>
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>$60.000</ListGroup.Item>
          <ListGroup.Item>Distintos colores</ListGroup.Item>
          <ListGroup.Item>Talle a elección</ListGroup.Item>
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
  );
};
export default Supersale;
