import React, { useState } from "react";
import "./style.css";

export default function Search({ searchMovies }) {
  const [search, setSearch] = useState("");
  const [type, setType] = useState("all");

  const handleKey = (e) => {
    if (e.key === "Enter") {
      searchMovies(search, type);
    }
  };

  const handleFilter = (e) => {
    setType(e.target.dataset.type);
    searchMovies(search, e.target.dataset.type);
  };

  return (
    <div className="row">
      <div className="input-field">
        <input
          className="validate"
          placeholder="search"
          type="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={handleKey}
        />
        <button
          className="btn search-btn"
          onClick={() =>
           searchMovies(search, type)
          }
        >
          Search
        </button>
      </div>
      <form action="#">
        <p>
          <label>
            <input
              className="with-gap"
              name="group1"
              type="radio"
              data-type="all"
              onChange={handleFilter}
              checked={type === "all"}
            />
            <span>All</span>
          </label>
        </p>
        <p>
          <label>
            <input
              className="with-gap"
              name="group1"
              type="radio"
              data-type="movie"
              onChange={handleFilter}
              checked={type === "movie"}
            />
            <span>Movies only</span>
          </label>
        </p>
        <p>
          <label>
            <input
              className="with-gap"
              name="group1"
              type="radio"
              data-type="series"
              onChange={handleFilter}
              checked={type === "series"}
            />
            <span>Series only</span>
          </label>
        </p>
      </form>
    </div>
  );
}
