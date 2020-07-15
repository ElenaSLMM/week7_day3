import React from 'react'
import queryString from 'query-string'


const QueryStringsExample = props => {

    console.log('Props nativas enviadas desde App:', props)

    const values = queryString.parse(props.location.search)

    return (
        <>
            <h2>Ejemplo de Route Params!</h2>
            <p>¡Mira la consola para ver las props nativas! :3</p>
            <p>Los Query Strings se encuentran en <b>props.location.search</b></p>
            <h3>Tienes que mandar a la BBDD:<br></br>
                De: {values.from}<br></br>
                A: {values.to}<br></br>
                Adultos: {values.adults}<br></br>
            </h3>
        </>
    )
}

export default QueryStringsExample;