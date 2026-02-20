import './home.css';
import { Button } from 'react-bootstrap';
import { useState } from 'react';
import Calculadora from '../components/Calculadora';

function Home(){
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
        <>
            <div className="caja_completa_calculadoras">
                <div className='row'>
                    <Calculadora />
                    <Calculadora />
                    <Calculadora />
                </div>
                <div className='row'>
                    <Calculadora />
                    <Calculadora />
                    <Calculadora />
                </div>
            </div>
        </>
    )
}
export default Home;