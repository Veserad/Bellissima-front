import { useState, useEffect } from "react";
import axios from 'axios';
import NovedadItem from "../components/NovedadItem";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const NovedadesPage = (props) => {
    const [loading, setLoading] = useState(false);
    const [novedades, setNovedades] = useState([]);

    useEffect(() => {
        const cargarNovedades = async () => {
            setLoading(true);
            const response = await axios.get('http://localhost:3000/api/novedades');
            setNovedades(response.data);
            setLoading(false);
        };
        cargarNovedades();
    }, []);

    return (
        <section className="holder novedades">
            <Row>
                {loading ? (
                    <p>Cargando...</p>
                ) : (
                    novedades.map(item =>
                        <Col key={item.id}>
                            <NovedadItem key={item.id}
                                title={item.titulo} subtitle={item.subtitulo} imagen={item.imagen} body={item.cuerpo} />
                        </Col>)
                )}
            </Row>
        </section>
    );
}

export default NovedadesPage;