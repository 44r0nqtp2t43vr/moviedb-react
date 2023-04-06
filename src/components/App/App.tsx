import { useReducer } from 'react';

import { MovieContext, initialMovieList } from '../../contexts/MovieContext';
import { movieReducer } from '../../reducers/movie';
import { MovieMenu } from '../MovieMenu';

import { AppWrapper } from './App.styled';

function App() {
  const [movieList, dispatch] = useReducer(movieReducer, initialMovieList);

  return (
    <MovieContext.Provider value={movieList}>
      <AppWrapper>
        <div>
          <h1>Movies 'R' Us</h1>
        </div>
        <MovieMenu></MovieMenu>
      </AppWrapper>
    </MovieContext.Provider>
  )
}

export default App
