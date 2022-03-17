import React from "react";
import Movie from "./movie";
import MovieTwo from "./movietwo";

export default class MovieList extends React.Component {
    render() {
       
        return (
            <div>
            <Movie />
            <MovieTwo />
            </div>
        )
    }
}