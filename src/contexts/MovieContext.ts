import { createContext, type Dispatch } from "react";
import { Movie } from "../models";
import { movieData } from "../data";

export const initialMovieList: Movie[] = movieData;

export const MovieContext = createContext(initialMovieList);
