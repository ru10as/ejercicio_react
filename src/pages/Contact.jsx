import { useState } from 'react'
import { Button, Container, Row, Col, Card, Form } from 'react-bootstrap';

function Contact(props){
    return(
        <Container className='mt-5 mb-3'>
        <Row className="justify-content-center">
            <Col>
                <Card style={{border:"2px solid black"}}>
                    <Card.Body>
                        <h2>{props.textos.contacto.eslogan}</h2>
                        <Form>
                            <Form.Group className="mb-3 fw-bold">
                                <Form.Label>{props.textos.contacto.nombre}</Form.Label>
                                <Form.Control  />
                                <Form.Text>
                                {props.textos.contacto.ayuda}
                                </Form.Text>
                            </Form.Group>

                            <Form.Group className="mb-3 fw-bold">
                                <Form.Label>Email</Form.Label>
                                <Form.Control />
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label className='fw-bold'>{props.textos.contacto.comentarios}</Form.Label>
                                <Form.Control as="textarea" placeholder='En que podemos ayudarte'/>
                            </Form.Group>

                            <Button variant="dark" type="submit">
                                {props.textos.contacto.submiteo}
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
