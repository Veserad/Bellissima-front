import React from 'react';
import Card from 'react-bootstrap/Card';
import '../styles/Catalogo.css';

const NovedadItem = (props) => {
    const { title, imagen, body } = props;
    return (
        <Card style={{ width: '18rem', display: 'flex' }} className='novedades1'>
            <Card.Img variant="top" src={imagen} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    <div dangerouslySetInnerHTML={{ __html: body }} />
                </Card.Text>
            </Card.Body>
        </Card>
    );
}

export default NovedadItem;