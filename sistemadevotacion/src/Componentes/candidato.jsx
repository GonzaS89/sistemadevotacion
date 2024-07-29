import {React , useState , useEffect} from 'react';
import '../Estilos/candidato.css';



const Candidato = (props) => {

    const [votos , setVotos] = useState(0)

    const aumentarVotos = () => {setVotos(votos + 1)}

    const [porcentaje, setPorcentaje] = useState(0);

    const calcularPorcentaje = () => {
        setPorcentaje(Math.round(votos / props.totalVotos * 100))
    }

    const sumarYEnviar = () => {
        return aumentarVotos(),
        calcularPorcentaje(),
        props.enviarVotos(votos)
    }



    return (
        <div className='contenedor-candidato'>
            <h2 className='nombre-candidato'>{props.nombre}</h2>
            <div className='contenedor-partido'>
                <button
                className='contenedor-imagen'
                onClick={sumarYEnviar}>
                <img className="imagen-partido "src={props.imagen} alt="" />
                </button>
                <div className='contenedor-barraporcentual'>
                    <span className = {props.nombre === 'javier milei' ? 
                    'barraporcentual lalibertadavanza' : 
                    'barraporcentual unionporlapatria'}
                style={{width : `${porcentaje}%`}}></span>
                </div>
                <span className='porcentaje'>{porcentaje}%</span>
            </div> 
            <h3>Votos :{votos}</h3>           
        </div>
    )
}

export default Candidato;