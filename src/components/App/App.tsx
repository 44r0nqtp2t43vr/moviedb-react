import axios from 'axios';
import { useState, useEffect, useReducer } from 'react';
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
import { Movie } from '../../models';

const client = axios.create({
  baseURL: "https://127.0.0.1:8003/movies" 
});

function App() {
  // const [movieList, dispatch] = useReducer(movieReducer, initialMovieList);
  const [movieList, setMovieList] = useState(null);

  useEffect(() => {
    client.get().then((response: Movie) => {
      setMovieList(response);
    });
  }, []);

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
