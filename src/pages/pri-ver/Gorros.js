import React from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import "../../styles/Catalogo.css";

const Gorros = (props) => {
  return (
    <div className="catalogo">
      <Card className="Card" style={{ width: "18rem" }}>
        <Card.Img variant="top" src="img/pri-ver/gorro1.jpg" />
        <Card.Body>
          <Card.Title>Gorro 1</Card.Title>
          <Card.Text>$7.000</Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>$Varios Talles</ListGroup.Item>
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
        <Card.Img variant="top" src="img/pri-ver/gorro2.jpg" />
        <Card.Body>
          <Card.Title>Gorro 2</Card.Title>
          <Card.Text>$7.500</Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>$Varios Talles</ListGroup.Item>
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
        <Card.Img variant="top" src="img/pri-ver/gorro3.jpg" />
        <Card.Body>
          <Card.Title>Gorro 3</Card.Title>
          <Card.Text>$8.000</Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>$Varios Talles</ListGroup.Item>
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
        <Card.Img variant="top" src="img/pri-ver/gorro4.jpg" />
        <Card.Body>
          <Card.Title>Gorro 4</Card.Title>
          <Card.Text>$8.500</Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>$Varios Talles</ListGroup.Item>
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
        <Card.Img variant="top" src="img/pri-ver/gorro5.jpg" />
        <Card.Body>
          <Card.Title>Gorro 5</Card.Title>
          <Card.Text>$9.000</Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>$Varios Talles</ListGroup.Item>
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
        <Card.Img variant="top" src="img/pri-ver/gorro6.jpg" />
        <Card.Body>
          <Card.Title>Gorro 6</Card.Title>
          <Card.Text>$9.500</Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>$Varios Talles</ListGroup.Item>
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
  );
};
export default Gorros;
