import { Container } from 'react-bootstrap';

function Footer(){
    return(
        <div style={{background:"#3b3232ff", color:"white"}}>
            <div className='row'>
                <div className='col'>
                    Esta es la col1
                </div>
                <div className='col'>
                    Esta es la col2 
                </div>
                <div className='col'>
                    Esta es la col3
                </div>
            </div>
        </div>
    )
}
export default Footer;