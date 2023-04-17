import type { ComponentPropsWithoutRef } from "react";
import { useNavigate } from "react-router-dom";
import { Movie } from "../../models";
import { Button, ButtonCell, CenteredCell, Row } from "./MovieRow.styled";

interface RowProps extends ComponentPropsWithoutRef<"tr"> {
    isGrey: boolean;
    movie: Movie;
}
  

export const MovieRow = ({isGrey, movie}: RowProps) => {
    const navigate = useNavigate();
    function handleClick(id: number) {
        navigate("/movie/detail/" + id);
    }

    return (
        <Row isGrey={isGrey}>
            <CenteredCell>{movie.mov_id}</CenteredCell>
            <td>{movie.mov_title}</td>
            <CenteredCell>{movie.mov_year}</CenteredCell>
            <CenteredCell>{movie.mov_time}</CenteredCell>
            <CenteredCell>{movie.mov_lang}</CenteredCell>
            <CenteredCell>{movie.mov_dt_rel}</CenteredCell>
            <CenteredCell>{movie.mov_rel_country}</CenteredCell>
            <ButtonCell><Button onClick={() => handleClick(movie.mov_id)}>Movie Details</Button></ButtonCell>
        </Row>
    );
}