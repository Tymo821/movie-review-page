import React from "react";
import MovieList from "./movie-list";
import Movie from "./movie";
import MovieTwo from "./movietwo";
import "./front-page.css"

export default class FrontPage extends React.Component{
    render() {
        return (
          <div className="jumbotron jumbotron-fluid">
            <div className="container">
              <h1 className="display-9">Cinema Reviews</h1>
              <h3 className="lead">Your home for the best cinema reviews</h3>
              <MovieList />
            </div>
          </div>
        )
    }
}