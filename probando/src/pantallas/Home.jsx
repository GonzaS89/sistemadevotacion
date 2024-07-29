import React from 'react'
import '../estilos/Pantallas.css'
import '../estilos/Home.css'

const Home = () => {
    return (
    <div className='home'>
        <div className='contenedor-front'>
            <div className='bloque'></div>
            <img 
            className='imagen-front'
            src={require('../imagenes/front.jpg')} alt="" />
            </div>
        
    </div>
    )
}

export default Home;