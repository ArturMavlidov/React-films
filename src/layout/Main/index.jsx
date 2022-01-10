import React from "react";

import { Movies } from '../../components'

import "./style.css";

export default class Main extends React.Component {
  state = {
    movies: [],
  }

  componentDidMount() {
    fetch("http://www.omdbapi.com/?apikey=a29f9b37&s=matrix")
      .then(response => response.json())
      .then(data => this.setState({movies: data.Search}))
  }

  render() {
    const {movies} = this.state

    return <main className="container content">
      {
      movies.length ? <Movies movies={this.state.movies}/> : <h3>Loading...</h3>
      }

    </main>;
  }
  }
