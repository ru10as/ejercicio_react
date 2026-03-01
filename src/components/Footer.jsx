import { Container, Row, Col } from 'react-bootstrap';

function Footer(props){
    return(
        <div style={{background:"#3b3232ff", color:"white"}}>
            <Container style={{color:"white"}}>
                <Row>
                    <Col xs={12} md={4} className='text-center'>
                        <h5 style={{margin:"6px"}}>CalcuRuben</h5>
                        <p className='text-secondary'>{props.textos.footer.breve_texto_footer}</p>
                    </Col>
                    <Col xs={12} md={4} className='text-center'>
                        <h5 style={{margin:"6px"}}>{props.textos.footer.redes_sociales}</h5>
                        <ul className='list-unstyled'>
                            <li> <i className='bi bi-instagram me-2 text-secondary'></i>
                            <span className='text-secondary'>Instagram</span>
                                </li>
                            <li> <i className='bi bi-twitter me-2 text-secondary'></i>
                            <span className='text-secondary'>Twitter</span>
                                </li>
                            <li> <i className='bi bi-facebook me-2 text-secondary'></i>
                            <span className='text-secondary'>Facebook</span>
                                </li>
                        </ul>
                    </Col>
                    <Col xs={12} md={4} className='text-center'>
                        <h5 style={{margin:"6px"}}>Legal</h5>
                        <p className='text-secondary'>© CalcuRuben - Todos los derechos reservados</p>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
export default Footer;
