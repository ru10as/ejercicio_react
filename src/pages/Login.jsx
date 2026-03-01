import { useState } from 'react'
import { Button, Container, Row, Col, Card, Form } from 'react-bootstrap';

function Login(props){

    const EnvioDado = (e) => {
        e.preventDefault();
        let mensaje = '';

        if (props.idioma === 'es'){
            mensaje = "Acceso realizado correctamente";
        }
        else if (props.idioma === 'en'){
            mensaje = "Login sent successfully";
        }
        alert(mensaje);
        e.target.reset();
    }

    return(
        <Container className='mt-5 d-flex justify-content-center mb-3'>
        <Row className="justify-content-center">
            <Col>
                <Card style={{border:"2px solid black"}}>
                    <Card.Body>
                        <h2>{props.textos.login.titulo}</h2>
                        <Form onSubmit={EnvioDado}>
                            <Form.Group className="mb-3 fw-bold">
                                <Form.Label>{props.textos.login.nombre}</Form.Label>
                                <Form.Control  />
                            </Form.Group>

                            <Form.Group className="mb-3 fw-bold">
                                <Form.Label>{props.textos.login.apellidos}</Form.Label>
                                <Form.Control  />
                            </Form.Group>

                            <Form.Group className="mb-3 fw-bold">
                                <Form.Label>Email</Form.Label>
                                <Form.Control />
                            </Form.Group>

                            <Button variant="dark" type="submit">
                                {props.textos.login.boton}
                            </Button>
                        </Form>
                    </Card.Body>
                    
                </Card>
            </Col>
        </Row>
    </Container>
    )
}
export default Login;