import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import MovieList from './Movies/MovieList.js';
import Movie from './Movies/Movie.js';
import SavedList from './Movies/SavedList.js';

const App = () => {
  const [savedList, setSavedList] = useState([]);

  const savedListIncludes = movie => {
    let BreakException = {};
    let found = false;

    try {
      savedList.forEach((e) => {
        if(e.id === movie.id) {
          found = true;
          throw BreakException;
        }
      });
    } catch (e) {
      if (e !== BreakException) throw e;
    }

    return found;
  };

  const addToSavedList = movie => {
    if(!savedListIncludes(movie)) setSavedList([...savedList, movie]);
  };

  return (
    <div>
      <SavedList list={savedList} />
      <Route exact path="/" component={MovieList} />
      <Route exact path="/movies/:id" render={(props) => <Movie {...props} addToSavedList={addToSavedList} />} />
    </div>
  );
};

export default App;
