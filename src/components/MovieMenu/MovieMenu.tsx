import { useContext } from "react";
import { MovieContext } from "../../contexts/MovieContext";
import { MovieCard } from "../MovieCard";
import { Wrapper } from "./MovieMenu.styled";

export const MovieMenu = () => {
    const movieList = useContext(MovieContext);

    return (
        <>
            <Wrapper>
                {movieList.length > 0 && movieList.map((data, index) => (
                    <MovieCard key={index} {...data} />
                ))}
            </Wrapper>
        </>
    );
}