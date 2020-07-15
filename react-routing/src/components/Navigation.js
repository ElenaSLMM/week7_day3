import React from 'react'

// import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom'

const Navigation = () => {
    return (
        <nav>
            <ul>
                <li>
                    <NavLink exact to="/" activeStyle={{ fontWeight: '900', color: 'red' }}>Inicio</NavLink>
                </li>
                <li>
                    <NavLink to="/about" activeStyle={{ fontWeight: '900', color: 'red' }}>Sobre mi</NavLink>
                </li>
                <li>
                    <NavLink to="/profile" activeStyle={{ fontWeight: '900', color: 'red' }}>Tu perfil</NavLink>
                </li>
                <li>
                    <NavLink to="/shop/winter/hats" activeStyle={{ fontWeight: '900', color: 'red' }}>Ejemplo Route Params</NavLink>
                </li>
                <li>
                    <NavLink to="/search-flights?from=MAD&to=AMS&adults=12&discuount=false" activeStyle={{ fontWeight: '900', color: 'red' }}>Ejemplo Query Strings</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Navigation;