import { Movie } from "../../models";
import { TextWrapper, TextWrapperBig, TextWrapperMid, Wrapper } from "./MovieCard.styled";

export const MovieCard = (movie: Movie) => {
    return (
        <Wrapper>
            <TextWrapper>{movie.mov_id}</TextWrapper>
            <TextWrapperBig>{movie.mov_title}</TextWrapperBig>
            <TextWrapper>{movie.mov_year}</TextWrapper>
            <TextWrapper>{movie.mov_time}</TextWrapper>
            <TextWrapper>{movie.mov_lang}</TextWrapper>
            <TextWrapperBig>{movie.mov_dt_rel}</TextWrapperBig>
            <TextWrapper>{movie.mov_rel_country}</TextWrapper>
            <TextWrapperMid><button>Movie Details</button></TextWrapperMid>
        </Wrapper>
    );
}