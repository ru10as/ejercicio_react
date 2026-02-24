function Resultado(props){
    return (
        <div className="d-flex flex-column align-items-center mb-3 mt-3">
            <div style={{backgroundColor:"#a4ca72ff", border:"4px solid black", textAlign:"center", width:"100%",maxWidth:"250px"}}>
                <span className="fw-bold">Resultado: {props.resultado_obtenido}</span>
            </div>
        </div>
    )
}
export default Resultado;
