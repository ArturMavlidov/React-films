import React from "react";

import { Movies, Preloader, Search } from "../../components";

import "./style.css";

const API_KEY = process.env.REACT_APP_API_KEY;

export default class Main extends React.Component {
  state = {
    movies: [],
    loading: true
  };

  setMovies = (str = "avengers", type="all") => {
    fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${str}${type !== 'all' ? `&type=${type}` : ''}`)
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
