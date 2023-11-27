import React from "react";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import '../../styles/Catalogo.css'

const Blusasremeras = (props) => {
    return (
        <div className="catalogo">
            <Card className='Card' style={{ width: '18rem' }}>
                <Card.Img variant="top" src="img/pri-ver/Blusa1.jpg" />
                <Card.Body>
                    <Card.Title>Blusa 1</Card.Title>
                    <Card.Text>
                        $6.000
                    </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroup.Item>$Varios Talles</ListGroup.Item>
                    <ListGroup.Item>Distintos colores</ListGroup.Item>
                    <ListGroup.Item>Tela a elección</ListGroup.Item>
                </ListGroup>
                <Card.Body>
                <button className="comprar" onClick={()=>{alert('Debes iniciar sesión para poder comprar y/o añadir productos a tu carrito')}}>Añadir al carrito</button>
                </Card.Body>
            </Card>

            <Card className='Card' style={{ width: '18rem' }}>
                <Card.Img variant="top" src="img/pri-ver/Blusa2.jpg" />
                <Card.Body>
                    <Card.Title>Blusa 2</Card.Title>
                    <Card.Text>
                        $6.500
                    </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroup.Item>$Varios Talles</ListGroup.Item>
                    <ListGroup.Item>Distintos colores</ListGroup.Item>
                    <ListGroup.Item>Tela a elección</ListGroup.Item>
                </ListGroup>
                <Card.Body>
                    <button className="comprar" onClick={()=>{alert('Debes iniciar sesión para poder comprar y/o añadir productos a tu carrito')}}>Añadir al carrito</button>
                </Card.Body>
            </Card>

            <Card className='Card' style={{ width: '18rem' }}>
                <Card.Img variant="top" src="img/pri-ver/Blusa3.jpg" />
                <Card.Body>
                    <Card.Title>Blusa 3</Card.Title>
                    <Card.Text>
                        $7.700
                    </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroup.Item>$Varios Talles</ListGroup.Item>
                    <ListGroup.Item>Distintos colores</ListGroup.Item>
                    <ListGroup.Item>Tela a elección</ListGroup.Item>
                </ListGroup>
                <Card.Body>
                    <button className="comprar" onClick={()=>{alert('Debes iniciar sesión para poder comprar y/o añadir productos a tu carrito')}}>Añadir al carrito</button>
                </Card.Body>
            </Card>

            <Card className='Card' style={{ width: '18rem' }}>
                <Card.Img variant="top" src="img/pri-ver/Blusa4.jpg" />
                <Card.Body>
                    <Card.Title>Blusa 4</Card.Title>
                    <Card.Text>
                        $7.500
                    </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroup.Item>$Varios Talles</ListGroup.Item>
                    <ListGroup.Item>Distintos colores</ListGroup.Item>
                    <ListGroup.Item>Tela a elección</ListGroup.Item>
                </ListGroup>
                <Card.Body>
                    <button className="comprar" onClick={()=>{alert('Debes iniciar sesión para poder comprar y/o añadir productos a tu carrito')}}>Añadir al carrito</button>
                </Card.Body>
            </Card>

            <Card className='Card' style={{ width: '18rem' }}>
                <Card.Img variant="top" src="img/pri-ver/Blusa5.jpg" />
                <Card.Body>
                    <Card.Title>Blusa 5</Card.Title>
                    <Card.Text>
                        $8.000
                    </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroup.Item>$Varios Talles</ListGroup.Item>
                    <ListGroup.Item>Distintos colores</ListGroup.Item>
                    <ListGroup.Item>Tela a elección</ListGroup.Item>
                </ListGroup>
                <Card.Body>
                    <button className="comprar" onClick={()=>{alert('Debes iniciar sesión para poder comprar y/o añadir productos a tu carrito')}}>Añadir al carrito</button>
                </Card.Body>
            </Card>

            <Card className='Card' style={{ width: '18rem' }}>
                <Card.Img variant="top" src="img/pri-ver/blusa6.jpg" />
                <Card.Body>
                    <Card.Title>Blusa 6</Card.Title>
                    <Card.Text>
                        $7.500
                    </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroup.Item>$Varios Talles</ListGroup.Item>
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
export default Blusasremeras;