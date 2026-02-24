import './calculadora.css';
import { Button, Container, Row, Col } from 'react-bootstrap'; 
import { useState } from 'react';
import Resultado from './Resultado';

function Calculadora(){
    const [operacion,setOperacion] = useState('+');
    const [numA, setnumA] = useState(0);
    const [numB, setnumB] = useState(0);

    const marcadosignoelegido = (boton) =>{
        if (operacion === boton){
            return 'dark'
        }
        else{
            return 'outline-dark'
        }
    }

    let resultado_actual = 0;
    if (operacion === '+'){
        resultado_actual = numA + numB;
    }
    else if (operacion === '-'){
        resultado_actual = numA - numB;
    }
    else if (operacion === 'x'){
        resultado_actual = numA * numB;
    }
    else if (operacion === '/'){
        resultado_actual = numA / numB;
    }
    return(
        <div className='d-flex flex-column' style={{padding:"10px"}}>
            
            <div style={{border:"4px solid black", backgroundColor:"#b67a7aff"}}>
                <h4 className='text-center' style={{padding:"10px"}}>Calculadora</h4>
                <Container>
                    <Row>
                        <Col xs={12} sm={4}>
                            <label className='me-3 fw-bold mt-2 mb-2'>Numero A</label>
                        </Col>

                        <Col xs={12} sm={6}>
                            <input className='form-control mt-2 mb-2' value={numA} onChange={(e) => setnumA(Number(e.target.value))} type='number' placeholder='Numero A'></input>
                        </Col>
                    </Row>

                    <Row>
                        <Col xs={12} sm={4}>
                            <label className='me-3 fw-bold mt-2 mb-2'>Numero B</label>
                        </Col>

                        <Col xs={12} sm={6}>
                            <input className='form-control mt-2 mb-2' value={numB} onChange={(e) => setnumB(Number(e.target.value))} type='number' placeholder='Numero B'></input>
                        </Col>
                    </Row>
                </Container>
                <Container>
                    <Row className='align-items-center g-2 justify-content-center'>
                        <Col xs={3} sm={2} className='d-flex'>
                            <Button variant={marcadosignoelegido('+')} style={{margin:"4px"}} onClick={()=>{setOperacion('+')}}>+</Button>
                        </Col>
                        <Col xs={3} sm={2} className='d-flex'>
                            <Button variant={marcadosignoelegido('-')} style={{margin:"4px"}} onClick={()=>{setOperacion('-')}}>-</Button>
                        </Col>
                        <Col xs={3} sm={2} className='d-flex'>
                            <Button variant={marcadosignoelegido('x')} style={{margin:"4px"}} onClick={()=>{setOperacion('x')}}>x</Button>
                        </Col>
                        <Col xs={3} sm={2} className='d-flex'>
                            <Button variant={marcadosignoelegido('/')} style={{margin:"4px"}} onClick={()=>{setOperacion('/')}}>÷</Button>
                        </Col>
                    </Row>
                </Container>
                
                
                <Resultado resultado_obtenido = {resultado_actual}></Resultado>
            </div>
        </div>
    )
}
export default Calculadora;
