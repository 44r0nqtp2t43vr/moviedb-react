import { useState, useContext, ComponentPropsWithoutRef } from "react";
import { MovieContext } from "../../contexts/MovieContext";
import { MovieRow } from "../MovieRow";
import { Button, ButtonWrapper, Header, Table, Title, Wrapper } from "./MovieMenu.styled";

interface MenuProps extends ComponentPropsWithoutRef<"div"> {
    pageIndex: number;
    handleClick: Function;
}

export const MovieMenu = ({pageIndex, handleClick}: MenuProps) => {
    const movieList = useContext(MovieContext);

    return (
        <Wrapper>
            <div>
            <Title>Movies 'R' Us</Title>
                {movieList.length > 0 &&
                <Table>
                    <tbody>
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
                            <MovieRow key={data.mov_id} isGrey={index % 2 == 0 ? false : true} movie={data} />
                        ))}
                    </tbody>
                    
                </Table>}
            </div>
            {movieList.length > 0 &&
                <ButtonWrapper>
                    <Button isActive={false} onClick={() => handleClick(pageIndex - 1)}>&#10092;&#10092;</Button>
                    {movieList.slice(0, Math.ceil(movieList.length / 10)).map((data, index) => (
                        <Button key={index} isActive={pageIndex == index ? true : false} onClick={() => handleClick(index)}>{index + 1}</Button>
                    ))}
                    <Button isActive={false} onClick={() => handleClick(pageIndex + 1)}>&#10093;&#10093;</Button>
                </ButtonWrapper>}
        </Wrapper>
    );
}