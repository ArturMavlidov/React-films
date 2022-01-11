import React from "react";

import { Movies, Preloader, Search } from '../../components'

import "./style.css";

export default class Main extends React.Component {
  state = {
    movies: [],
  }

  getMovies = (str = 'matrix') => {
     fetch(`http://www.omdbapi.com/?apikey=a29f9b37&s=${str}`)
       .then((response) => response.json())
       .then((data) => this.setState({ movies: data.Search }));
  }

  componentDidMount() {
    this.getMovies()
  }

  searchMovies = (str) => {
    this.getMovies(str)
  }

  render() {
    const {movies} = this.state

    return <main className="container content">
      <Search searchMovies={this.searchMovies}/>
      {
      movies?.length ? <Movies movies={this.state.movies}/> : <Preloader/>
      }

    </main>;
  }
  }
