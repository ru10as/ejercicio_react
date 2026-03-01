import './calculadora.css';
import { Button, Container, Row, Col } from 'react-bootstrap'; 
import { useState, useEffect } from 'react';
import Resultado from './Resultado';

function Calculadora(props){

    const [operacion,setOperacion] = useState('+');
    const [numA, setnumA] = useState(0);
    const [numB, setnumB] = useState(0);
    const [resultado, setResultado] = useState(null);


    const marcadosignoelegido = (boton) =>{
        if (operacion === boton){
            return 'dark'
        }
        else{
            return 'outline-dark'
        }
    }


    const calcular = () => {
        let res = 0;
        if (operacion === '+'){
            res = numA + numB;
        }
        else if (operacion === '-'){
            res = numA - numB;
        }
        else if (operacion === 'x') {
            res = numA * numB;
        }
        else if (operacion === '/') {
            if (numB === 0) {
                res = null;
            } else {
                res = numA / numB;
            }
        }      
        setResultado(res);

        if (props.agregarAlHistorial) {
            props.agregarAlHistorial(numA, numB, operacion, res);
        }
    }


    return(
        <div className='d-flex flex-column' style={{padding:"10px"}}>
            
            <div style={{border:"4px solid black", backgroundColor:"#b67a7aff"}}>
                <h4 className='text-center' style={{padding:"10px"}}>{props.textos.calc.calculadora}</h4>
                <Container>
                    <Row>
                        <Col xs={12} sm={4}>
                            <label className='me-3 fw-bold mt-2 mb-2'>{props.textos.calc.numA}</label>
                        </Col>

                        <Col xs={12} sm={6}>
                            <input className='form-control mt-2 mb-2' value={numA} onChange={(e) => setnumA(Number(e.target.value))} type='number' placeholder='Numero A'></input>
                        </Col>
                    </Row>

                    <Row>
                        <Col xs={12} sm={4}>
                            <label className='me-3 fw-bold mt-2 mb-2'>{props.textos.calc.numB}</label>
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
                
                
                <Container className='mt-2 d-flex align-items-center'>
                    <Col>
                        <Row className='justify-content-center'>
                            <Button variant="success" onClick={calcular} style={{maxWidth:"90px"}}>
                                {props.textos.calc.boton}
                            </Button>
                        </Row>
                        <Row className='justify-content-center'>
                            <Resultado resultado_obtenido={resultado} textos={props.textos}/>
                        </Row>
                    </Col>
                </Container>
            </div>
        </div>
    )
}
export default Calculadora;
