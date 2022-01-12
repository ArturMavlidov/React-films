import React, { useState, useEffect } from "react";

import { Movies, Preloader, Search } from "../../components";

import "./style.css";

const API_KEY = process.env.REACT_APP_API_KEY;

export default function Main() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    addMovies();
  }, [])

  const addMovies = (str = "avengers", type="all") => {
    fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${str}${type !== 'all' ? `&type=${type}` : ''}`)
      .then((response) => response.json())
      .then((data) => setMovies(data.Search), setLoading(false))
      .catch((err) => {
        console.error(err);
        setLoading(false);
      })
  };

  const searchMovies = (str, type) => {
    setLoading(true);
    addMovies(str, type)
  };

    return (
      <main className="container content">
        <Search searchMovies={searchMovies} />
        {loading ? <Preloader /> : <Movies movies={movies} />}
      </main>
    );
}
