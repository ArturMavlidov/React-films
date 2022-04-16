import React from "react";
import './style.css'

export default function Movies({ Title, Year, imdbID, Type, Poster }) {
  if (Poster === 'N/A') {
    console.log(Poster);
  }

  return (
    <div className="card movie">
      <div className="card-image waves-effect waves-block waves-light">
        <img className="activator" src={Poster === 'N/A' ? 'https://via.placeholder.com/250x380' : Poster} />
      </div>
      <div className="card-content">
        <span className="card-title activator grey-text text-darken-4">
          {Title}
        </span>
        <p>
          {Year} <span className="right">{Type}</span>
        </p>
      </div>
    </div>
  );
}
