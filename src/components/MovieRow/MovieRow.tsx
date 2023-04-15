import { useNavigate } from "react-router-dom";
import { Movie } from "../../models";

export const MovieRow = (movie: Movie) => {
    const navigate = useNavigate();
    function handleClick(id: number) {
        navigate("/movie/detail/" + id);
    }

    return (
        <tr>
            <td>{movie.mov_id}</td>
            <td>{movie.mov_title}</td>
            <td>{movie.mov_year}</td>
            <td>{movie.mov_time}</td>
            <td>{movie.mov_lang}</td>
            <td>{movie.mov_dt_rel}</td>
            <td>{movie.mov_rel_country}</td>
            <td><button onClick={() => handleClick(movie.mov_id)}>Movie Details</button></td>
        </tr>
    );
}