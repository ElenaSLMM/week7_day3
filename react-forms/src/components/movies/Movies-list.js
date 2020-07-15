import React, { Component } from 'react'

import { movies as moviesFromApi } from './../statisLists/static-lists'

import MovieForm from './Movie-form'
import MovieCard from './Movie-card'

class MoviesList extends Component {

    constructor() {
        super()
        this.state = {
            movies: moviesFromApi
        }
    }

    deleteMovie = id => {
        const moviesCopy = [...this.state.movies]
        moviesCopy.splice(id, 1)
        this.setState({ movies: moviesCopy })
    }

    insertMovie = newMovie => {
        const moviesCopy = [...this.state.movies]
        moviesCopy.push(newMovie)
        this.setState({ movies: moviesCopy })
    }

    render() {

        return (
            <>
                <h1>Películas</h1>

                {this.state.movies.map((elm, idx) => <MovieCard {...elm} removeMovie={() => this.deleteMovie(idx)} key={idx} />)}

                <h1>Crea una nueva peli!</h1>

                <MovieForm insertMovie={this.insertMovie} />
            </>
        )
    }
}

export default MoviesList