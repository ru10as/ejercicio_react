import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

function Historial({ historial }) {
  return (
    <Container className='mt-5'>
    <Row>
        <Col>
            <Card className='shadow-sm'>
                <Card.Header style={{backgroundColor:"#f1cacaff"}} className='text-center'>
                    <h3>Ultimas 10 operaciones</h3>
                </Card.Header>
                <Card.Body style={{backgroundColor:"#998080ff"}} className='text-center'>
                    <ul style={{listStyle:'none'}}>
                        {historial.map((op, index) => (
                        <li key={index}>
                            {op.numA} {op.tipo} {op.numB} = {op.resultado}
                        </li>
                        ))}
                    </ul>
                </Card.Body> 
            </Card>
        </Col>
    </Row>
    
    </Container>
    
  );
}

export default Historial;