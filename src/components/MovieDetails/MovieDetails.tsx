import axios from 'axios';
import { useState, useContext, useEffect } from "react";
import { MovieContext } from "../../contexts/MovieContext";
import { useNavigate, useParams } from 'react-router-dom';
import { Button, ButtonWrapper, Header, Row, Table, Title, Wrapper } from "../MovieDetails";

const baseURL = 'http://127.0.0.1:8003/movie/detail'

export const MovieDetails = () => {
    // const movieList = useContext(MovieContext);
    const { id } = useParams()
    // const movie = movieList.filter(movieList => movieList.mov_id == Number(id));
    const [movie, setMovie] = useState<any>([]);
    const navigate = useNavigate();
    function handleClick() {
        navigate("/movies");
    }

    useEffect(() => {
        axios.get(`${baseURL}/${id}`).then((response) => {
          console.log(response.data);
          setMovie(response.data);
        });
      }, []);

    return (
        <Wrapper>
            <Title>Movie Information</Title>
            <Table>
                <Row>
                    <Header>Movie Title:</Header>
                    <td>{movie.title}</td>
                </Row>
                <Row>
                    <Header>Year:</Header>
                    <td>{movie.year}</td>
                </Row>
                <Row>
                    <Header>Running Time:</Header>
                    <td>{movie.time} minutes</td>
                </Row>
                <Row>
                    <Header>Directed By:</Header>
                    <td>
                        {movie.directors?.map((director: any, index: number) => (
                            index != movie.directors.length - 1 ? `${director.dir_fname} ${director.dir_lname},` : `${director.dir_fname} ${director.dir_lname}`
                        ))}
                    </td>
                </Row>
                <Row>
                    <Header>Starring:</Header>
                    <td>{movie.actors ? movie.actors[0].act_fname : ''} {movie.actors ? movie.actors[0].act_lname : ''} - {movie.actors ? movie.actors[0].pivot.role : ''}</td>
                </Row>
                <Row>
                    <Header>Genre:</Header>
                    <td>
                        {movie.genres?.length == 0 ? 'N/A' : movie.genres?.map((genre: any, index: number) => (
                            index != movie.genres.length - 1 ? `${genre.gen_title},` : `${genre.gen_title}`
                        ))}
                    </td>
                </Row>
                <Row>
                    <Header>Rating:</Header>
                    <td>{movie.reviewers && movie.reviewers[0]?.rev_name ? movie.reviewers[0]?.rev_name : 'N/A'}</td>
                </Row>
                <Row>
                    <Header>Score:</Header>
                    <td>{movie.reviewers && movie.reviewers[0]?.pivot?.rev_stars ? `${movie.reviewers[0]?.pivot?.rev_stars} stars` : 'N/A'}</td>
                </Row>
            </Table>
            <ButtonWrapper><Button onClick={() => handleClick()}>Go Back to List</Button></ButtonWrapper>
        </Wrapper>
    );
}