import { useContext } from "react";
import { MovieContext } from "../../contexts/MovieContext";
import { MovieCard } from "../MovieCard";
import { Wrapper, TitleWrapper, TextWrapper, TextWrapperBig, TextWrapperMid, TextWrapperSmall } from "./MovieMenu.styled";

export const MovieMenu = () => {
    const movieList = useContext(MovieContext);

    return (
        <>
            <Wrapper>
                <table>
                    <tr>
                        <th>
                            <TitleWrapper>
                                <TextWrapper>Movie ID</TextWrapper>
                                <TextWrapperBig>Movie Title</TextWrapperBig>
                                <TextWrapper>Year Made</TextWrapper>
                                <TextWrapper>Length</TextWrapper>
                                <TextWrapper>Language</TextWrapper>
                                <TextWrapperBig>Date of Release</TextWrapperBig>
                                <TextWrapperBig>Country Released</TextWrapperBig>
                                <TextWrapperSmall></TextWrapperSmall>
                            </TitleWrapper>
                        </th>
                    </tr>
                    {movieList.length > 0 && movieList.map((data, index) => (
                        <tr>
                            <MovieCard key={index} {...data} />
                        </tr>
                    ))}
                </table>
            </Wrapper>
        </>
    );
}