import { useState, useContext } from "react";
import { MovieContext } from "../../contexts/MovieContext";
import { useNavigate, useParams } from 'react-router-dom';

export const MovieDetails = () => {
    const movieList = useContext(MovieContext);
    const { id } = useParams()
    const movie = movieList.filter(movieList => movieList.mov_id == Number(id));
    const navigate = useNavigate();
    function handleClick() {
        navigate("/movies");
    }

    return (
        <>
            <h1>Movie Information</h1>
            <table>
                <tr>
                    <th>Movie Title:</th>
                    <td>{movie[0].mov_title}</td>
                </tr>
                <tr>
                    <th>Year:</th>
                    <td>{movie[0].mov_year}</td>
                </tr>
                <tr>
                    <th>Running Time:</th>
                    <td>{movie[0].mov_time} minutes</td>
                </tr>
                <tr>
                    <th>Directed By:</th>
                    <td>Alfred Hitchcock</td>
                </tr>
                <tr>
                    <th>Starring:</th>
                    <td>James Stewart - John Scottie Ferguson</td>
                </tr>
                <tr>
                    <th>Genre:</th>
                    <td>Mystery</td>
                </tr>
                <tr>
                    <th>Rating:</th>
                    <td>Righty Sock</td>
                </tr>
                <tr>
                    <th>Score:</th>
                    <td>8 stars</td>
                </tr>
            </table>
            <button onClick={() => handleClick()}>Go Back to List</button>
        </>
    );
}