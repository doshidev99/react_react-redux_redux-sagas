import React, { Component } from "react";
import { connect } from "react-redux";

import { fetchMoviesAction, addMoviesAction } from "../redux/actions";

class MovieComponent extends Component {
  render() {
    const { movies, onFetchMovies, onAddMovies } = this.props;
    console.log(movies);
    return (
      <div>
        this is MovieComponent
        <p>hello</p>
        <button onClick={() => onFetchMovies()}> Fetch movie</button>
        <button onClick={() => onAddMovies()}> Add movie</button>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  movies: state.movieReducers
});

const mapDispatchToProps = dispatch => ({
  onFetchMovies: () => {
    dispatch(fetchMoviesAction());
  },
  onAddMovies: () => {
    dispatch(addMoviesAction());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(MovieComponent);
