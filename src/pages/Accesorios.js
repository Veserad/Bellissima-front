import React from "react";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import '../styles/Catalogo.css'

const Accesorios = (props) => {
  return (
    <div className='catalogo'>
      
      <Card className='Card' style={{ width: '18rem' }}>
        <Card.Img variant="top" src="img/accesorios/vincha.jpg" />
        <Card.Body>
          <Card.Title>Vincha</Card.Title>
          <Card.Text>
            $10.000
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>Varios talles</ListGroup.Item>
          <ListGroup.Item>Distintos colores</ListGroup.Item>
          <ListGroup.Item>Tela a elección</ListGroup.Item>
        </ListGroup>
        <Card.Body>
          <button className="comprar" onClick={()=>{alert('Debes iniciar sesión para poder comprar y/o añadir productos a tu carrito')}}>Añadir al carrito</button>
        </Card.Body>
      </Card>

      <Card className='Card' style={{ width: '18rem' }}>
        <Card.Img variant="top" src="img/accesorios/hebilla1.jpg" />
        <Card.Body>
          <Card.Title>Hebilla 1</Card.Title>
          <Card.Text>
            $3.000
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>Varios tamaños</ListGroup.Item>
          <ListGroup.Item>Distintos colores</ListGroup.Item>
          <ListGroup.Item>Material a elección</ListGroup.Item>
        </ListGroup>
        <Card.Body>
          <button className="comprar" onClick={()=>{alert('Debes iniciar sesión para poder comprar y/o añadir productos a tu carrito')}}>Añadir al carrito</button>
        </Card.Body>
      </Card>

      <Card className='Card' style={{ width: '18rem' }}>
        <Card.Img variant="top" src="img/accesorios/cinturon.jpg" />
        <Card.Body>
          <Card.Title>Cinturón</Card.Title>
          <Card.Text>
            $5.000
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>Varios talles</ListGroup.Item>
          <ListGroup.Item>Distintos colores</ListGroup.Item>
          <ListGroup.Item>Material a elección</ListGroup.Item>
        </ListGroup>
        <Card.Body>
          <button className="comprar" onClick={()=>{alert('Debes iniciar sesión para poder comprar y/o añadir productos a tu carrito')}}>Añadir al carrito</button>
        </Card.Body>
      </Card>

      <Card className='Card' style={{ width: '18rem' }}>
        <Card.Img variant="top" src="img/accesorios/tarjetero.jpg" />
        <Card.Body>
          <Card.Title>Tarjetero</Card.Title>
          <Card.Text>
            $6.000
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>Varios temas</ListGroup.Item>
          <ListGroup.Item>Distintos colores</ListGroup.Item>
          <ListGroup.Item>Material a elección</ListGroup.Item>
        </ListGroup>
        <Card.Body>
          <button className="comprar" onClick={()=>{alert('Debes iniciar sesión para poder comprar y/o añadir productos a tu carrito')}}>Añadir al carrito</button>
        </Card.Body>
      </Card>

      <Card className='Card' style={{ width: '18rem' }}>
        <Card.Img variant="top" src="img/accesorios/lentes.jpg" />
        <Card.Body>
          <Card.Title>Lentes</Card.Title>
          <Card.Text>
            $10.000
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>Varios modelos</ListGroup.Item>
          <ListGroup.Item>Distintos colores</ListGroup.Item>
          <ListGroup.Item>Material a elección</ListGroup.Item>
        </ListGroup>
        <Card.Body>
          <button className="comprar" onClick={()=>{alert('Debes iniciar sesión para poder comprar y/o añadir productos a tu carrito')}}>Añadir al carrito</button>
        </Card.Body>
      </Card>

      <Card className='Card' style={{ width: '18rem' }}>
        <Card.Img variant="top" src="img/accesorios/brazalete.jpg" />
        <Card.Body>
          <Card.Title>Brazalete</Card.Title>
          <Card.Text>
            $5.000
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>Varios talles</ListGroup.Item>
          <ListGroup.Item>Distintos colores</ListGroup.Item>
          <ListGroup.Item>Material a elección</ListGroup.Item>
        </ListGroup>
        <Card.Body>
          <button className="comprar" onClick={()=>{alert('Debes iniciar sesión para poder comprar y/o añadir productos a tu carrito')}}>Añadir al carrito</button>
        </Card.Body>
      </Card>

      <Card className='Card' style={{ width: '18rem' }}>
        <Card.Img variant="top" src="img/accesorios/hebilla2.jpg" />
        <Card.Body>
          <Card.Title>Hebilla 2</Card.Title>
          <Card.Text>
            $1.500
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>Varios modelos</ListGroup.Item>
          <ListGroup.Item>Distintos colores</ListGroup.Item>
          <ListGroup.Item>Material a elección</ListGroup.Item>
        </ListGroup>
        <Card.Body>
          <button className="comprar" onClick={()=>{alert('Debes iniciar sesión para poder comprar y/o añadir productos a tu carrito')}}>Añadir al carrito</button>
        </Card.Body>
      </Card>

      <Card className='Card' style={{ width: '18rem' }}>
        <Card.Img variant="top" src="img/accesorios/diadema.jpg" />
        <Card.Body>
          <Card.Title>Diadema</Card.Title>
          <Card.Text>
            $16.000
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>Varios talles</ListGroup.Item>
          <ListGroup.Item>Distintos colores</ListGroup.Item>
          <ListGroup.Item>Material a elección</ListGroup.Item>
        </ListGroup>
        <Card.Body>
          <button className="comprar" onClick={()=>{alert('Debes iniciar sesión para poder comprar y/o añadir productos a tu carrito')}}>Añadir al carrito</button>
        </Card.Body>
      </Card>

      <Card className='Card' style={{ width: '18rem' }}>
        <Card.Img variant="top" src="img/accesorios/arete.jpg" />
        <Card.Body>
          <Card.Title>Arete</Card.Title>
          <Card.Text>
            $8.000
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>Varios tamaños</ListGroup.Item>
          <ListGroup.Item>Distintos colores</ListGroup.Item>
          <ListGroup.Item>Material a elección</ListGroup.Item>
        </ListGroup>
        <Card.Body>
          <button className="comprar" onClick={()=>{alert('Debes iniciar sesión para poder comprar y/o añadir productos a tu carrito')}}>Añadir al carrito</button>
        </Card.Body>
      </Card>
      
    </div>
  );
}
export default Accesorios;