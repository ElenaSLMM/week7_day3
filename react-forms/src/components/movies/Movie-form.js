import React, { Component } from 'react'

class MovieForm extends Component {
    constructor() {
        super()
        this.state = {
            title: '',
            director: '',
            rating: '',
            hasOscar: false
        }
    }

    handleFormSubmit = e => {
        e.preventDefault()
        this.props.insertMovie(this.state)
        this.setState({
            title: '',
            director: '',
            rating: '',
            hasOscar: false
        })
    }

    handleInputChange = e => {
        const name = e.target.name
        const value = name === 'hasOscar' ? e.target.checked : e.target.value
        this.setState({ [name]: value })
    }

    render() {

        return (
            <>
                <form onSubmit={this.handleFormSubmit}>

                    <label>
                        Título:
                        <input name="title" type="text" value={this.state.title} onChange={this.handleInputChange} />
                    </label> <br></br>

                    <label>
                        Director:
                        <input name="director" type="text" value={this.state.director} onChange={this.handleInputChange} />
                    </label><br></br>

                    <label>
                        Puntuación:
                        <input name="rating" type="number" value={this.state.rating} onChange={this.handleInputChange} />
                    </label><br></br>

                    <label>
                        ¿Tiene Óscar?
                        <input name="hasOscar" type="checkbox" checked={this.state.hasOscar} onChange={this.handleInputChange} />
                    </label><br></br><br></br>

                    <button>¡Enviar!</button>
                </form>
            </>
        )
    }
}

export default MovieForm