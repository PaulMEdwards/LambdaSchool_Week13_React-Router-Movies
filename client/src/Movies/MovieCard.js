import React from 'react';
import { Link } from 'react-router-dom';

const MovieCard = (props) => {
  // console.log(props);
  
  const id = Number(props.id);
  const { title, director, metascore, stars } = props.movie;

  return (
    <div className="movie-card">
      <Link to={`/movies/${id}`}>
        <h2>{title}</h2>
      </Link>
      <div className="movie-director">
        Director: <em>{director}</em>
      </div>
      <div className="movie-metascore">
        Metascore: <strong>{metascore}</strong>
      </div>
      <h3>Actors</h3>

      {stars.map(star => (
        <div key={star} className="movie-star">
          {star}
        </div>
      ))}
    </div>
  );
};

export default MovieCard;
