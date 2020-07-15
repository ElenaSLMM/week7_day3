import React from 'react'
import { Link } from 'react-router-dom'

const CoasterDetails = props => {

    const id = props.match.params.id

    return (
        <>
            <h2>Ejemplo de Route Params!</h2>
            <p>Tienes que mandar a la BBDD el id <b>{id}</b></p>
            <Link to="/coasters/783ygeygd7ns8hdnuv">Ver detalles de la montaña rusa Siete Picos</Link><br></br>
            <Link to="/coasters/jnd786gd8ydiybdy8b">Ver detalles de la montaña rusa Shambala</Link><br></br>
            <Link to="/coasters/noi48hhf9uen9ehj9j">Ver detalles de la montaña rusa Tarántula</Link><br></br>
            <Link to="/coasters/komiuvfr7y4hiuiufi">Ver detalles de la montaña rusa Tornado</Link>
        </>
    )
}

export default CoasterDetails;