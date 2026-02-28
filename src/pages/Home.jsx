import { Container, Row, Col } from 'react-bootstrap';
import Calculadora from '../components/Calculadora';

function Home(props) {
    return (
        <Container className="d-flex align-items-center justify-content-center">
            <Row className="w-100 justify-content-center">
                <Col>
                    <Calculadora setIdioma={props.setIdioma} idioma={props.idioma} textos={props.textos} 
                    agregarAlHistorial={props.agregarAlHistorial}/>
                </Col>
            </Row>
        </Container>
    );
}

export default Home;
