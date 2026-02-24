import { Container, Row, Col } from 'react-bootstrap';
import Calculadora from '../components/Calculadora';

function Home() {
    return (
        <Container className="d-flex align-items-center justify-content-center">
            <Row className="w-100 justify-content-center">
                <Col>
                    <Calculadora />
                </Col>
            </Row>
        </Container>
    );
}

export default Home;
