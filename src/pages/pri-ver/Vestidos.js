import React from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import "../../styles/Catalogo.css";

const Vestidos = (props) => {
  return (
    <div className="catalogo">
      <Card className="Card" style={{ width: "18rem" }}>
        <Card.Img variant="top" src="img/pri-ver/vestido1.jpg" />
        <Card.Body>
          <Card.Title>Vestido 1</Card.Title>
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
        <Card.Img variant="top" src="img/pri-ver/vestido2.jpg" />
        <Card.Body>
          <Card.Title>Vestido 2</Card.Title>
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
        <Card.Img variant="top" src="img/pri-ver/vestido3.jpg" />
        <Card.Body>
          <Card.Title>Vestido 3</Card.Title>
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
        <Card.Img variant="top" src="img/pri-ver/vestido4.jpg" />
        <Card.Body>
          <Card.Title>Vestido 4</Card.Title>
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
        <Card.Img variant="top" src="img/pri-ver/vestido5.jpg" />
        <Card.Body>
          <Card.Title>Vestido 5</Card.Title>
          <Card.Text>$10.000</Card.Text>
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
        <Card.Img variant="top" src="img/pri-ver/vestido6.jpg" />
        <Card.Body>
          <Card.Title>Vestido 6</Card.Title>
          <Card.Text>$11.000</Card.Text>
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
        <Card.Img variant="top" src="img/pri-ver/vestido7.jpg" />
        <Card.Body>
          <Card.Title>Vestido 7</Card.Title>
          <Card.Text>$11.500</Card.Text>
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
        <Card.Img variant="top" src="img/pri-ver/vestido8.jpg" />
        <Card.Body>
          <Card.Title>Vestido 8</Card.Title>
          <Card.Text>$12.000</Card.Text>
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
        <Card.Img variant="top" src="img/pri-ver/vestido9.jpg" />
        <Card.Body>
          <Card.Title>Vestido 9</Card.Title>
          <Card.Text>$12.500</Card.Text>
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
export default Vestidos;
