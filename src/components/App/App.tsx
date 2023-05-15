import axios from 'axios';
import { useEffect, useReducer, useState } from 'react';
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

const baseURL = 'http://127.0.0.1:8003/movies'

function App() {
  // const [movieList, dispatch] = useReducer(movieReducer, initialMovieList);
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      console.log(response.data);
      setMovieList(response.data.data);
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
