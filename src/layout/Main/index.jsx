import React from "react";

import { Movies, Preloader, Search } from "../../components";

import "./style.css";

export default class Main extends React.Component {
  state = {
    movies: [],
    loading: true
  };

  setMovies = (str = "matrix", type="all") => {
    fetch(`http://www.omdbapi.com/?apikey=a29f9b37&s=${str}${type !== 'all' ? `&type=${type}` : ''}`)
      .then((response) => response.json())
      .then((data) => this.setState({ movies: data.Search, loading: false }));
  };

  componentDidMount() {
    this.setMovies();
  }

  searchMovies = (str, type) => {
    this.setState({loading: true})
    this.setMovies(str, type);
  };

  render() {
    const { movies, loading } = this.state;

    return (
      <main className="container content">
        <Search searchMovies={this.searchMovies} />
        {loading ? <Preloader /> : <Movies movies={movies} />}
      </main>
    );
  }
}
