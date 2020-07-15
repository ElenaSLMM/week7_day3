import React, { Component } from 'react'

class Counter extends Component {
    constructor() {
        super()
        this.state = { count: 0 }
        console.log("3.- El método CONSTRUCTOR de COUNTER se ha invocado")
    }

    componentDidMount() {
        console.log("El componente COUNTER se ha montado completamente")

        this.interval = setInterval(() => {
            this.setState({ count: this.state.count + 1 })
        }, 3000)
    }

    componentDidUpdate(prevProps, prevState) {
        console.log("El componente COUNTER se ha actualizado, de", prevState, " a ", this.state)
    }

    componentWillUnmount() {
        console.log("Antes de desmontar el componente COUNTER, cancelamos procesos asíncronos")
        clearInterval(this.interval)
    }

    render() {
        console.log("4.- El método RENDER de COUNTER se ha invocado")
        return <h1>Número de intervalos: {this.state.count}</h1>
    }
}

export default Counter