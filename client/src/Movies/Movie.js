import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
import MovieCard from './MovieCard';
import axios from 'axios';

const Movie = (props) => {
  const [movie, setMovie] = useState();
  const id = Number(props.match.params.id);

  useEffect(() => {
    axios
    .get(`http://localhost:5000/api/movies/${id}`)
    .then(response => {
      setMovie(response.data);
    })
    .catch(error => {
      console.error(error);
    });

  },[movie]);
  
  // Uncomment this only when you have moved on to the stretch goals
  // const saveMovie = () => {
  //   const addToSavedList = props.addToSavedList;
  //   addToSavedList(movie)
  // }

  if (!movie) {
    return <div>Loading movie information...</div>;
  }

  return (
    <div className="save-wrapper">
      <Route path="/" render={(props) => <MovieCard {...props} movie={movie} id={id} />} />
      <div className="save-button">Save</div>
    </div>
  );
}

export default Movie;
