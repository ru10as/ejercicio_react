import './calculadora.css';
import { Button } from 'react-bootstrap';
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
        <div className='col caja_calculadora_individual d-flex flex-column'>
            <div style={{border:"4px solid black", backgroundColor:"#b67a7aff"}}>
                <h4 className='text-center'>Calculadora</h4>
                <div>
                    <div className='d-flex' style={{justifyContent:"center", padding:"3px"}}>
                        <label className='me-3'>Numero A</label><input value={numA} onChange={(e) => setnumA(Number(e.target.value))} type='number' placeholder='Numero A'></input>
                    </div>
                    <div className='d-flex' style={{justifyContent:"center", padding:"3px"}}>
                        <label className='me-3'>Numero B</label><input value={numB} onChange={(e) => setnumB(Number(e.target.value))} type='number' placeholder='Numero B'></input>  
                    </div>
                </div>
                <div className='d-flex mb-3' style={{justifyContent:"center", padding:"5px"}}>
                    <Button variant={marcadosignoelegido('+')} style={{margin:"4px"}} onClick={()=>{setOperacion('+')}}>+</Button>
                    <Button variant={marcadosignoelegido('-')} style={{margin:"4px"}} onClick={()=>{setOperacion('-')}}>-</Button>
                    <Button variant={marcadosignoelegido('x')} style={{margin:"4px"}} onClick={()=>{setOperacion('x')}}>x</Button>
                    <Button variant={marcadosignoelegido('/')} style={{margin:"4px"}} onClick={()=>{setOperacion('/')}}>/</Button>
                </div>
                <Resultado resultado_obtenido = {resultado_actual}></Resultado>
            </div>
        </div>
    )
}
export default Calculadora;