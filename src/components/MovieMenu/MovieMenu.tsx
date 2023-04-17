import { useState, useContext } from "react";
import { MovieContext } from "../../contexts/MovieContext";
import { MovieRow } from "../MovieRow";
import { Button, ButtonWrapper, Header, Table, Title, Wrapper } from "./MovieMenu.styled";

export const MovieMenu = () => {
    const [pageIndex, setPageIndex] = useState(0);
    const movieList = useContext(MovieContext);

    function handleClick(newPageIndex: number) {
        if (newPageIndex >= 0 && newPageIndex <= Math.floor(movieList.length / 10)) {
            setPageIndex(newPageIndex);
        }
    }

    return (
        <Wrapper>
            <div>
            <Title>Movies 'R' Us</Title>
                {movieList.length > 0 &&
                <Table>
                    <Header>
                        <th>Movie ID</th>
                        <th>Movie Title</th>
                        <th>Year Made</th>
                        <th>Length</th>
                        <th>Language</th>
                        <th>Date of Release</th>
                        <th>Country Released</th>
                        <th></th>
                    </Header>
                    {movieList.slice(pageIndex * 10, pageIndex * 10 + 10).map((data, index) => (
                        <MovieRow key={index} isGrey={index % 2 == 0 ? false : true} movie={data} />
                    ))}
                </Table>}
            </div>
            {movieList.length > 0 &&
                <ButtonWrapper>
                    <Button isActive={false} onClick={() => handleClick(pageIndex - 1)}>&#10092;&#10092;</Button>
                    {movieList.slice(0, Math.ceil(movieList.length / 10)).map((data, index) => (
                        <Button isActive={pageIndex == index ? true : false} onClick={() => handleClick(index)}>{index + 1}</Button>
                    ))}
                    <Button isActive={false} onClick={() => handleClick(pageIndex + 1)}>&#10093;&#10093;</Button>
                </ButtonWrapper>}
        </Wrapper>
    );
}