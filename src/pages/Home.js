import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { Link } from "react-router-dom";
import styles from "../styles/Home.module.css";

const Home = (props) => {
  return (
    <div className={styles.home}>
      <Carousel>
        <Carousel.Item>
          {/* <ExampleCarouselImage text="First slide" /> */}
          <img
            src={`${process.env.PUBLIC_URL}/img/index/banner1.png`}
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
            src={`${process.env.PUBLIC_URL}/img/index/banner2.png`}
            height="100%"
            width="100%"
            alt="70off"
          />
        </Carousel.Item>
        <Carousel.Item>
          {/* <ExampleCarouselImage text="Third slide" /> */}
          <img
            src={`${process.env.PUBLIC_URL}/img/index/banner3.png`}
            height="100%"
            width="100%"
            alt="tarjetas"
          />
          <Carousel.Caption className={styles.tarjeta}>
            <h3>¡Aceptamos todas las tarjetas!</h3>
            <p>Promociones exclusivas y hasta 12 cuotas sin interés</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <div className={styles.catalogoHome}>
        <Link to={"/blusas"}>
          <Card className={styles.Card}>
            <Card.Img
              variant="top"
              src={`${process.env.PUBLIC_URL}/img/pri-ver/blusa1.jpg`}
            />
            <Card.Body className={styles.title}>
              <Card.Title>Blusas</Card.Title>
            </Card.Body>
            <ListGroup className={styles.listGroupFlush}>
              <ListGroup.Item>Varios talles</ListGroup.Item>
              <ListGroup.Item>Distintos colores</ListGroup.Item>
              <ListGroup.Item>Tela a elección</ListGroup.Item>
            </ListGroup>
          </Card>
        </Link>
        <Link to={"/abrigos"}>
          <Card className={styles.Card}>
            <Card.Img
              variant="top"
              src={`${process.env.PUBLIC_URL}/img/ot-in/abrigo1.jpg`}
            />
            <Card.Body className={styles.title}>
              <Card.Title>Abrigos</Card.Title>
            </Card.Body>
            <ListGroup className={styles.listGroupFlush}>
              <ListGroup.Item>Varios talles</ListGroup.Item>
              <ListGroup.Item>Distintos colores</ListGroup.Item>
              <ListGroup.Item>Tela a elección</ListGroup.Item>
            </ListGroup>
          </Card>
        </Link>
        <Link to={"/accesorios"}>
          <Card className={styles.Card}>
            <Card.Img
              variant="top"
              src={`${process.env.PUBLIC_URL}/img/accesorios/vincha.jpg`}
            />
            <Card.Body className={styles.title}>
              <Card.Title>Accesorios</Card.Title>
            </Card.Body>
            <ListGroup className={styles.listGroupFlush}>
              <ListGroup.Item>Varios talles</ListGroup.Item>
              <ListGroup.Item>Distintos colores</ListGroup.Item>
              <ListGroup.Item>Tela a elección</ListGroup.Item>
            </ListGroup>
          </Card>
        </Link>
        <Link to={"/outlet"}>
          <Card className={styles.Card}>
            <Card.Img
              variant="top"
              src={`${process.env.PUBLIC_URL}/img/outlet/cartera.jpg`}
            />
            <Card.Body className={styles.title}>
              <Card.Title>Outlets</Card.Title>
            </Card.Body>
            <ListGroup className={styles.listGroupFlush}>
              <ListGroup.Item>Varios talles</ListGroup.Item>
              <ListGroup.Item>Distintos colores</ListGroup.Item>
              <ListGroup.Item>Tela a elección</ListGroup.Item>
            </ListGroup>
          </Card>
        </Link>
      </div>
    </div>
  );
};
export default Home;
