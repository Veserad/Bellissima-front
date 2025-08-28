import React from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import "../../styles/Catalogo.css";

const Polleras = (props) => {
  return (
    <div className="catalogo">
      <Card className="Card" style={{ width: "18rem" }}>
        <Card.Img variant="top" src="img/pri-ver/pollera1.jpg" />
        <Card.Body>
          <Card.Title>Pollera 1</Card.Title>
          <Card.Text>$5.000</Card.Text>
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
        <Card.Img variant="top" src="img/pri-ver/pollera2.jpg" />
        <Card.Body>
          <Card.Title>Pollera 2</Card.Title>
          <Card.Text>$5.500</Card.Text>
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
        <Card.Img variant="top" src="img/pri-ver/pollera3.jpg" />
        <Card.Body>
          <Card.Title>Pollera 3</Card.Title>
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
        <Card.Img variant="top" src="img/pri-ver/pollera4.jpg" />
        <Card.Body>
          <Card.Title>Pollera 4</Card.Title>
          <Card.Text>$6.500</Card.Text>
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
        <Card.Img variant="top" src="img/pri-ver/pollera5.jpg" />
        <Card.Body>
          <Card.Title>Pollera 5</Card.Title>
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
        <Card.Img variant="top" src="img/pri-ver/pollera6.jpg" />
        <Card.Body>
          <Card.Title>Pollera 6</Card.Title>
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
        <Card.Img variant="top" src="img/pri-ver/pollera7.jpg" />
        <Card.Body>
          <Card.Title>Pollera 7</Card.Title>
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
        <Card.Img variant="top" src="img/pri-ver/pollera8.jpg" />
        <Card.Body>
          <Card.Title>Pollera 8</Card.Title>
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
        <Card.Img variant="top" src="img/pri-ver/pollera9.jpg" />
        <Card.Body>
          <Card.Title>Pollera 9</Card.Title>
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
    </div>
  );
};
export default Polleras;
