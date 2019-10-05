import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
import MovieCard from './MovieCard';
import axios from 'axios';

const Movie = (props) => {
  const [movie, setMovie] = useState();
  const id = Number(props.match.params.id);

  useEffect(() => {
    let source = axios.CancelToken.source();
    axios
    .get(`http://localhost:5000/api/movies/${id}`, {
      cancelToken: source.token
    })
    .then(response => {
      setMovie(response.data);
    })
    .catch(error => {
      console.error(error);
    });
    return function () {
      source.cancel("Cancelling in cleanup");
    };
    // eslint-disable-next-line
  },[movie]);
  
  const saveMovie = () => {
    const addToSavedList = props.addToSavedList;
    addToSavedList(movie);
  };

  if (!movie) {
    // jshint ignore:start
    return <div>Loading movie information...</div>;
    // jshint ignore:end
  }

  return (
    // jshint ignore:start
    <div className="save-wrapper">
      <Route render={(props) => <MovieCard {...props} movie={movie} id={id} />} />
      <div className="save-button" onClick={saveMovie}>Save</div>
    </div>
    // jshint ignore:end
  );
};

export default Movie;
