import React from 'react'

import { Switch, Route } from 'react-router-dom'

import NavBar from './Navigation'
import Home from './Home'
import About from './About'
import Profile from './Profile'
import UrlParamsExample from './UrlParamsExample'
import QueryStringsExample from './QueryStringsExample'
import CoasterDetails from './CoasterDetails'

function App() {

  // Ejemplo para renderizado condicional
  // const loggedInUser = undefined
  const loggedInUser = { username: 'Charini', age: 32 }

  return (

    <main style={{ textAlign: 'center' }}>

      <NavBar />

      <hr></hr>

      <Switch>
        <Route path="/" exact render={() => <Home />} />
        <Route path="/about" render={() => <About />} />
        <Route path="/profile" render={() => loggedInUser ? <Profile {...loggedInUser} /> : <Home />} />

        <Route path="/shop/:season/:clothe" render={props => <UrlParamsExample {...props} />} />
        <Route path="/coasters/:id" render={props => <CoasterDetails {...props} />} />

        <Route path="/search-flights" render={props => <QueryStringsExample {...props} />} />
      </Switch>

    </main>
  )
}

export default App