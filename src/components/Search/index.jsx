import React from "react";
import './style.css'

export default class Search extends React.Component {
  state = {
    search: "",
  };

  handleKey = (e) => {
    if (e.key === 'Enter') {
      this.props.searchMovies(this.state.search);
    }
  }

  render() {
    return (
      <div className="row">
          <div className="input-field">
            <input
              className="validate"
              placeholder="search"
              type="search"
              value={this.state.search}
              onChange={(e) => this.setState({search: e.target.value})}
              onKeyDown={this.handleKey}
            />
            <button className="btn search-btn" onClick={this.handleKey}>Search</button>
          </div>
      </div>
    );
  }
}
