import { useReducer } from 'react';
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";

import { MovieContext, initialMovieList } from '../../contexts/MovieContext';
import { movieReducer } from '../../reducers/movie';
import { MovieMenu } from '../MovieMenu';

import { AppWrapper } from './App.styled';
import { MovieDetails } from '../MovieDetails';

function App() {
  const [movieList, dispatch] = useReducer(movieReducer, initialMovieList);

  return (
    <MovieContext.Provider value={movieList}>
      <AppWrapper>
        <BrowserRouter>
        <Routes>
          <Route path="/movies" element={<MovieMenu />} />
          <Route path="/movie/detail/:id" element={<MovieDetails />} />
        </Routes>
      </BrowserRouter>
      </AppWrapper>
      
    </MovieContext.Provider>
  )
}

export default App
