import React from 'react';
import '../estilos/NavBar.css';


const links = [
    {
        name : "Home",
        href : "/home"
    },
    {
        name : "Productos",
        href : "/productos"
    },
    {
        name : "Contacto",
        href : "/contacto"
    }
];

const NavBar = () => {
    return (
    <div className='header-contenedor'>
        <div className='logo-contenedor'>
    <a href='/'>
            <img
            className='header-logo' 
            src={require('../imagenes/logosinfondo.png')} 
            alt="5656556" />
        </a>
        </div>
        <div className='enlaces-contenedor'>
        {links.map( x => ( 
        <a href={x.href} className='links-estilos'>{x.name}</a>))}
        </div>
    </div>
    )
}

export default NavBar;