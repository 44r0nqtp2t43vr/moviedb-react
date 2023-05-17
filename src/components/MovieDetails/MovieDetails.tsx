import axios from 'axios';
import { useState, useEffect } from "react";
import { useNavigate, useParams } from 'react-router-dom';
import { BoldCell, Button, ButtonWrapper, Header, IndentedCell, Row, Table, Title, Wrapper } from "../MovieDetails";

const baseURL = 'http://127.0.0.1:8003/movie/detail'

export const MovieDetails = () => {
    const [movie, setMovie] = useState<any>([]);
    const { id } = useParams()
    const navigate = useNavigate();
    
    function handleClick() {
        navigate(-1);
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
                <tbody>
                    <Row>
                        <Header>Movie Title:</Header>
                        <BoldCell>{movie.title ? movie.title : 'N/A'}</BoldCell>
                    </Row>
                    <Row>
                        <Header>Year:</Header>
                        <td>{movie.year ? movie.year : 'N/A'}</td>
                    </Row>
                    <Row>
                        <Header>Running Time:</Header>
                        <td>{movie.time ?`${movie.time} minutes` : 'N/A'}</td>
                    </Row>
                    <Row>
                        <Header>Directed By:</Header>
                        <IndentedCell>{movie.directors?.length == 0 || movie.directors == null ? 'N/A' : movie.directors?.map((director: any, index: number) => (
                                index != movie.directors.length - 1 ? `${director.dir_fname} ${director.dir_lname},` : `${director.dir_fname} ${director.dir_lname}`
                            ))}</IndentedCell>
                    </Row>
                    <Row>
                        <Header>Starring:</Header>
                        <IndentedCell>{movie.actors?.length == 0 || movie.actors == null ? 'N/A' : movie.actors?.map((actor: any, index: number) => (
                                index == 0 ? `${actor.act_fname ? actor.act_fname : null} ${actor.act_lname ? actor.act_lname : null} - ${actor.pivot.role ? actor.pivot.role : null}` : null
                            ))}</IndentedCell>
                    </Row>
                    <Row>
                        <Header>Genre:</Header>
                        <IndentedCell>{movie.genres?.length == 0 || movie.genres == null ? 'N/A' : movie.genres?.map((genre: any, index: number) => (
                                index != movie.genres.length - 1 ? `${genre.gen_title},` : `${genre.gen_title}`
                            ))}</IndentedCell>
                    </Row>
                    <Row>
                        <Header>Rating:</Header>
                        <IndentedCell>{movie.reviewers && movie.reviewers[0]?.rev_name ? movie.reviewers[0]?.rev_name : 'N/A'}</IndentedCell>
                    </Row>
                    <Row>
                        <Header>Score:</Header>
                        <td>{movie.reviewers && movie.reviewers[0]?.pivot?.rev_stars ? `${movie.reviewers[0]?.pivot?.rev_stars} stars` : 'N/A'}</td>
                    </Row>
                </tbody>
                
            </Table>
            <ButtonWrapper><Button onClick={() => handleClick()}>Go Back to List</Button></ButtonWrapper>
        </Wrapper>
    );
}