import { useState, useContext } from "react";
import { MovieContext } from "../../contexts/MovieContext";
import { useNavigate, useParams } from 'react-router-dom';
import { Button, ButtonWrapper, Header, Row, Table, Title, Wrapper } from "../MovieDetails";

export const MovieDetails = () => {
    const movieList = useContext(MovieContext);
    const { id } = useParams()
    const movie = movieList.filter(movieList => movieList.mov_id == Number(id));
    const navigate = useNavigate();
    function handleClick() {
        navigate("/movies");
    }

    return (
        <Wrapper>
            <Title>Movie Information</Title>
            <Table>
                <Row>
                    <Header>Movie Title:</Header>
                    <td>{movie[0].mov_title}</td>
                </Row>
                <Row>
                    <Header>Year:</Header>
                    <td>{movie[0].mov_year}</td>
                </Row>
                <Row>
                    <Header>Running Time:</Header>
                    <td>{movie[0].mov_time} minutes</td>
                </Row>
                <Row>
                    <Header>Directed By:</Header>
                    <td>Alfred Hitchcock</td>
                </Row>
                <Row>
                    <Header>Starring:</Header>
                    <td>James Stewart - John Scottie Ferguson</td>
                </Row>
                <Row>
                    <Header>Genre:</Header>
                    <td>Mystery</td>
                </Row>
                <Row>
                    <Header>Rating:</Header>
                    <td>Righty Sock</td>
                </Row>
                <Row>
                    <Header>Score:</Header>
                    <td>8 stars</td>
                </Row>
            </Table>
            <ButtonWrapper><Button onClick={() => handleClick()}>Go Back to List</Button></ButtonWrapper>
        </Wrapper>
    );
}