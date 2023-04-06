import { Movie } from "../../models";
import { Wrapper } from "./MovieCard.styled";

export const MovieCard = (movie: Movie) => {
    return (
        <Wrapper>
            <span>{movie.mov_id}</span>
            <span>{movie.mov_title}</span>
            <span>{movie.mov_year}</span>
            <span>{movie.mov_time}</span>
            <span>{movie.mov_lang}</span>
            <span>{movie.mov_dt_rel}</span>
            <span>{movie.mov_rel_country}</span>
            <button>Movie Details</button>
        </Wrapper>
    );
}