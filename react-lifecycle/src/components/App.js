import React, { Component } from 'react';

import Counter from './Counter'

class App extends Component {
  constructor() {
    super()
    this.state = { isRunning: true }
    console.log("1.- El método CONSTRUCTOR de APP se ha invocado")
  }

  componentDidMount() {
    console.log("El componente APP se ha montado completamente")
  }


  removeCounter = () => this.setState({ isRunning: false })

  render() {

    console.log("2.- El método RENDER de APP se ha invocado")
    return (
      <div>

        {this.state.isRunning && <Counter />}

        <button onClick={this.removeCounter}>Desmontar el contador!</button>

      </div>
    )
  }
}

export default App;