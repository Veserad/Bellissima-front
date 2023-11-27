import React from "react";
import Card from 'react-bootstrap/Card';
import '../styles/Catalogo.css'

const Outlet = (props) => {
    return (
        <div className='catalogo'>
            <Card className='Card' style={{ width: '18rem' }}>
                <Card.Img variant="top" src="img/outlet/remera1.jpg" />
                <Card.Body>
                    <Card.Title>Remera 1</Card.Title>
                    <Card.Text>
                        $7.000
                    </Card.Text>
                    <button className="comprar" onClick={()=>{alert('Debes iniciar sesión para poder comprar y/o añadir productos a tu carrito')}}>Añadir al carrito</button>
                </Card.Body>
            </Card>

            <Card className='Card' style={{ width: '18rem' }}>
                <Card.Img variant="top" src="img/outlet/gorro.jpg" />
                <Card.Body>
                    <Card.Title>Gorro</Card.Title>
                    <Card.Text>
                        $6.500
                    </Card.Text>
                    <button className="comprar" onClick={()=>{alert('Debes iniciar sesión para poder comprar y/o añadir productos a tu carrito')}}>Añadir al carrito</button>
                </Card.Body>
            </Card>

            <Card className='Card' style={{ width: '18rem' }}>
                <Card.Img variant="top" src="img/outlet/camisa.jpg" />
                <Card.Body>
                    <Card.Title>Camisa</Card.Title>
                    <Card.Text>
                        $6.000
                    </Card.Text>
                    <button className="comprar" onClick={()=>{alert('Debes iniciar sesión para poder comprar y/o añadir productos a tu carrito')}}>Añadir al carrito</button>
                </Card.Body>
            </Card>

            <Card className='Card' style={{ width: '18rem' }}>
                <Card.Img variant="top" src="img/outlet/remera2.jpg" />
                <Card.Body>
                    <Card.Title>Remera 2</Card.Title>
                    <Card.Text>
                        $6.500
                    </Card.Text>
                    <button className="comprar" onClick={()=>{alert('Debes iniciar sesión para poder comprar y/o añadir productos a tu carrito')}}>Añadir al carrito</button>
                </Card.Body>
            </Card>

            <Card className='Card' style={{ width: '18rem' }}>
                <Card.Img variant="top" src="img/outlet/cartera.jpg" />
                <Card.Body>
                    <Card.Title>Cartera</Card.Title>
                    <Card.Text>
                        $10.500
                    </Card.Text>
                    <button className="comprar" onClick={()=>{alert('Debes iniciar sesión para poder comprar y/o añadir productos a tu carrito')}}>Añadir al carrito</button>
                </Card.Body>
            </Card>

            <Card className='Card' style={{ width: '18rem' }}>
                <Card.Img variant="top" src="img/outlet/bufanda.webp" />
                <Card.Body>
                    <Card.Title>Bufanda</Card.Title>
                    <Card.Text>
                        $3.000
                    </Card.Text>
                    <button className="comprar" onClick={()=>{alert('Debes iniciar sesión para poder comprar y/o añadir productos a tu carrito')}}>Añadir al carrito</button>
                </Card.Body>
            </Card>

        </div>
    );
}
export default Outlet;