import { useEffect, useState } from 'react'
import './App.css'
import Home from './pages/Home'
import {Route, Routes} from 'react-router-dom'
import Footer from './components/Footer'
import Header from './components/Header'
import Contact from './pages/Contact'
import Historial from './pages/Historial'
import Login from './pages/Login'

function App() {

  const [idioma, setIdioma] = useState('es');
  const [historial, setHistorial] = useState([]);
  const [resultado, setResultado] = useState(null);

  useEffect(() => {
    const datos = localStorage.getItem("historial");
    if (datos) {
      setHistorial(JSON.parse(datos));
    }
  }, []); 

  useEffect(() => {
    localStorage.setItem("historial", JSON.stringify(historial));
  }, [historial]);

  function agregarAlHistorial(numA, numB, tipo, resultado){
    const nuevaOperacion = {
      numA: numA, 
      numB: numB, 
      tipo: tipo, 
      resultado: resultado
    }

    const nuevoHistorial = [nuevaOperacion, ...historial];

    if(nuevoHistorial.length > 10){
      nuevoHistorial.pop();
    }

    setHistorial(nuevoHistorial);
  }

  const textos= {
    es: {
      calc:{
        numA:"Numero A", 
        numB:"Numero B",
        calculadora:"Calculadora",
        boton:"Calcular"
      },
      footer:{
        redes_sociales:"Redes sociales",
        breve_texto_footer:"La mejor herramienta para tus calculos del dia",
      },
      header:{
        inicio:"Inicio",
        contacto:"Contacto", 
        historial:"Historial",
        indicador_idioma:"Idioma",
      },
      resultado:{
        resultado_obtenido:"Resultado",
      }, 
      contacto:{
        eslogan:"¡Ponte en contacto con nosotros!",
        nombre:"Nombre",
        ayuda:"Mete el nombre identificativo sin puntos ni guiones",
        comentarios:"Comentarios",
        submiteo: "Enviar mensaje"
      },
      historial:{
        titulo:"Ultimas 10 operaciones"
      },
      login:{
        titulo: "Acceso",
        nombre:"Nombre",
        apellidos:"Apellidos",
        boton:"Acceder"
      }
    },
    en: {
      calc:{
        numA:"Number A", 
        numB:"Number B",
        calculadora:"Calculator",
        boton:"Calculate"
      },
      footer:{
        redes_sociales:"Social media",
        breve_texto_footer:"The best tool for your daily calculations",
      },
      header:{
        inicio:"Home",
        contacto:"Contact", 
        historial:"History",
        indicador_idioma:"Language",
      },
      resultado:{
        resultado_obtenido:"Result",
      },
      contacto:{
        eslogan:"Get in touch with us!",
        nombre:"Name",
        ayuda:"Enter your identification name without periods or hyphens",
        comentarios:"Comments",
        submiteo: "Send message"
      },
      historial:{
        titulo:"Last 10 operations"
      },
      login:{
        titulo: "Login",
        nombre:"First Name",
        apellidos:"Last Name",
        boton:"Sign in"
      }
    }
  }

  return (
    <>
    <div className='d-flex flex-column min-vh-100'>
      <Header idioma={idioma} setIdioma={setIdioma} textos={textos[idioma]}></Header>
      <main className='flex-grow-1'>
        <Routes>
          <Route path="/" element={<Home textos={textos[idioma]} idioma={idioma} setIdioma={setIdioma} agregarAlHistorial={agregarAlHistorial}/>} />
          <Route path="/contact" element={<Contact textos={textos[idioma]} idioma={idioma}/>} />
          <Route path="/historial" element={<Historial historial={historial} textos={textos[idioma]} idioma={idioma}/>} />
          <Route path="/login" element={<Login idioma={idioma} textos={textos[idioma]}/>}/>
        </Routes>
      </main>
      <Footer idioma={idioma} setIdioma={setIdioma} textos={textos[idioma]}></Footer>
    </div>
    </>

  )
}

export default App;
