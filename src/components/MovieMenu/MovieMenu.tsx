import { useState, useContext } from "react";
import { MovieContext } from "../../contexts/MovieContext";
import { MovieRow } from "../MovieRow";

export const MovieMenu = () => {
    const [pageIndex, setPageIndex] = useState(0);
    const movieList = useContext(MovieContext);

    function handleClick(newPageIndex: number) {
        if (newPageIndex >= 0 && newPageIndex <= Math.floor(movieList.length / 10)) {
            setPageIndex(newPageIndex);
        }
    }

    return (
        <>
            <h1>Movies 'R' Us</h1>
            {movieList.length > 0 && <div>
                <table>
                <tr>
                    <th>Movie ID</th>
                    <th>Movie Title</th>
                    <th>Year Made</th>
                    <th>Length</th>
                    <th>Language</th>
                    <th>Date of Release</th>
                    <th>Country Released</th>
                    <th></th>
                </tr>
                {movieList.slice(pageIndex * 10, pageIndex * 10 + 10).map((data, index) => (
                    <MovieRow key={index} {...data} />
                ))}
            </table>
            <div>
                <button onClick={() => handleClick(pageIndex - 1)}>&#10092;&#10092;</button>
                {movieList.slice(0, Math.ceil(movieList.length / 10)).map((data, index) => (
                    <button onClick={() => handleClick(index)}>{index + 1}</button>
                ))}
                <button onClick={() => handleClick(pageIndex + 1)}>&#10093;&#10093;</button>
            </div>
                </div>}
        </>
    );
}