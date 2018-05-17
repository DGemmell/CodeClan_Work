import React from "react";
import Movie from "./Movie";

class MovieList extends React.Component{
  render(){
    if(!this.props.movies.length) return null;

    const movieList = this.props.movies.map((movie, index) => {
      return(
        <Movie
           key={index}
           movie={movie}
         />
      )
    })
    return <React.Fragment>
      {movieList}
    </React.Fragment>
  }
}

export default MovieList;
