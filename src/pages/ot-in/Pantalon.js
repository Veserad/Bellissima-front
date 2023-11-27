import React from "react";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import '../../styles/Catalogo.css'

const Pantalon = (props) => {
    return (
        <div className="catalogo">
            <Card className='Card' style={{ width: '18rem' }}>
                <Card.Img variant="top" src="img/ot-in/pantalon1.jpg" />
                <Card.Body>
                    <Card.Title>Pantalon 1</Card.Title>
                    <Card.Text>
                        $8.000
                    </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroup.Item>Varios Talles</ListGroup.Item>
                    <ListGroup.Item>Distintos colores</ListGroup.Item>
                    <ListGroup.Item>Tela a elección</ListGroup.Item>
                </ListGroup>
                <Card.Body>
                    <button className="comprar" onClick={()=>{alert('Debes iniciar sesión para poder comprar y/o añadir productos a tu carrito')}}>Añadir al carrito</button>
                </Card.Body>
            </Card>

            <Card className='Card' style={{ width: '18rem' }}>
                <Card.Img variant="top" src="img/ot-in/pantalon2.jpg" />
                <Card.Body>
                    <Card.Title>Pantalon 2</Card.Title>
                    <Card.Text>
                        $9.500
                    </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroup.Item>Varios Talles</ListGroup.Item>
                    <ListGroup.Item>Distintos colores</ListGroup.Item>
                    <ListGroup.Item>Tela a elección</ListGroup.Item>
                </ListGroup>
                <Card.Body>
                    <button className="comprar" onClick={()=>{alert('Debes iniciar sesión para poder comprar y/o añadir productos a tu carrito')}}>Añadir al carrito</button>
                </Card.Body>
            </Card>

            <Card className='Card' style={{ width: '18rem' }}>
                <Card.Img variant="top" src="img/ot-in/Pantalon3.jpg" />
                <Card.Body>
                    <Card.Title>Pantalon 3</Card.Title>
                    <Card.Text>
                        $10.500
                    </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroup.Item>Varios Talles</ListGroup.Item>
                    <ListGroup.Item>Distintos colores</ListGroup.Item>
                    <ListGroup.Item>Tela a elección</ListGroup.Item>
                </ListGroup>
                <Card.Body>
                    <button className="comprar" onClick={()=>{alert('Debes iniciar sesión para poder comprar y/o añadir productos a tu carrito')}}>Añadir al carrito</button>
                </Card.Body>
            </Card>

        </div>
    );
}
export default Pantalon;