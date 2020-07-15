import React from 'react'
import { Link } from 'react-router-dom'

const UrlParamsExample = props => {

    console.log('Props nativas enviadas desde App:', props)

    const season = props.match.params.season
    const clothe = props.match.params.clothe

    return (
        <>
            <h2>Ejemplo de Route Params!</h2>
            <p>¡Mira la consola para ver las props nativas! :3</p>
            <p>Los Route Params se encuentran en <b>props.match.params</b></p>
            <h3>Tienes que mandar a la BBDD la temporada {season} y la prenda {clothe}</h3>

            <hr></hr>

            <h2>Más ejemplos</h2>
            <Link to="/coasters/783ygeygd7ns8hdnuv">Ver detalles de la montaña rusa Siete Picos</Link><br></br>
            <Link to="/coasters/jnd786gd8ydiybdy8b">Ver detalles de la montaña rusa Shambala</Link><br></br>
            <Link to="/coasters/noi48hhf9uen9ehj9j">Ver detalles de la montaña rusa Tarántula</Link><br></br>
            <Link to="/coasters/komiuvfr7y4hiuiufi">Ver detalles de la montaña rusa Tornado</Link>
        </>
    )
}

export default UrlParamsExample;