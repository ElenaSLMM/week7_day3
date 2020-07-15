import React from 'react'

const profile = ({ username }) => {


    return (
        <div>
            <div>
                <h1>Tu perfil</h1>
                <p>¡Bienvenid@, {username}!</p>
            </div>
        </div>
    )
}

export default profile