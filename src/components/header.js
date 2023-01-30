import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
       <nav>
            <ul>
                <li> <Link to="">INICIO</Link> </li>
                <li> <Link to="ventas-garrafones">VENTA GARRAFONES</Link> </li>
                <li> <Link to="acerca-de">ACERCA DE</Link> </li>
                <li> <Link to="ubicacion">UBICACION</Link> </li>
            </ul>
        </nav>
    )
}

export default Header