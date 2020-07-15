import React from 'react'

import { Link } from 'react-router-dom'

const home = () => {
    return (
        <div>
            <div>
                <h3>Welcome to my portfolio page! My name is</h3>
                <h1>¡Charini!</h1>
                <p>and I'm Web Developer!</p>
                <Link to="/about">Ver mi experiencia</Link>
                <hr></hr>
            </div>
        </div>
    )
}

export default home;