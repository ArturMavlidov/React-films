import React from "react";
import Movie from '../Movie'

export default function Movies({ movies }) {
  return (
    <div className="movies">
      {
        movies?.map((movie) => {
          return <Movie key={movie.imdbID} {...movie}/>
        }) || <h4>Nothing</h4>
      }
    </div>
  );
}
