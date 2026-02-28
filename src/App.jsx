import { useEffect, useState } from 'react'
import './App.css'
import Home from './pages/Home'
import {Route, Routes} from 'react-router-dom'
import Footer from './components/Footer'
import Header from './components/Header'
import Contact from './pages/Contact'
import Historial from './pages/Historial'

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
      inicio:"Inicio",
      indicador_idioma:"Idioma", 
      breve_texto_footer:"La mejor herramienta para tus calculos del dia",
      contacto:"Contacto", 
      numA:"Numero A", 
      numB:"Numero B",
      redes_sociales:"Redes sociales",
      resultado:"Resultado",
      favoritos:"Favoritos",
      calculadora:"Calculadora"},
    en: {
      inicio:"Home",
      indicador_idioma:"Language",
      breve_texto_footer:"The best tool for your daily calculations",
      contacto:"Contact", 
      numA:"Number A", 
      numB:"Number B",
      redes_sociales:"Social Media",
      resultado:"Result",
      favoritos:"Favorites",
      calculadora:"Calculator"}
  }

  return (
    <>
    <div className='d-flex flex-column min-vh-100'>
      <Header idioma={idioma} setIdioma={setIdioma} textos={textos[idioma]}></Header>
      <main className='flex-grow-1'>
        <Routes>
          <Route path="/" element={<Home textos={textos[idioma]} idioma={idioma} setIdioma={setIdioma} agregarAlHistorial={agregarAlHistorial}/>} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/historial" element={<Historial historial={historial} />} />
        </Routes>
      </main>
      <Footer idioma={idioma} setIdioma={setIdioma} textos={textos[idioma]}></Footer>
    </div>
    </>

  )
}

export default App;
