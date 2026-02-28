import { useState } from 'react'
import { Button, Container, Row, Col, Card, Form } from 'react-bootstrap';

function Contact(){
    return(
        <Container className='mt-5'>
        <Row className="justify-content-center">
            <Col>
                <Card style={{border:"2px solid black"}}>
                    <Card.Body>
                        <h2>¡Ponte en contacto con nosotros!</h2>
                        <Form>
                            <Form.Group className="mb-3 fw-bold">
                                <Form.Label>Nombre</Form.Label>
                                <Form.Control  />
                                <Form.Text>
                                Mete el nombre identificativo sin puntos ni guiones
                                </Form.Text>
                            </Form.Group>

                            <Form.Group className="mb-3 fw-bold">
                                <Form.Label>Email</Form.Label>
                                <Form.Control />
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label className='fw-bold'>Comentarios</Form.Label>
                                <Form.Control as="textarea" placeholder='En que podemos ayudarte'/>
                            </Form.Group>

                            <Button variant="dark" type="submit">
                                Enviar mensaje
                            </Button>
                        </Form>
                    </Card.Body>
                    
                </Card>
            </Col>
        </Row>
    </Container>
    )
    
}
export default Contact;
