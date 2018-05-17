import React from "react";
import Header from "../components/Header"
import MovieList from "../components/MovieList"



class MovieBox extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      movies: []
    };
  }

  componentDidMount(){
    fetch("https://api.nytimes.com/svc/movies/v2/reviews/search.json?api-key=700b8afc52c548b580d919b96ba924f4")
    .then(response => response.json())
    .then(json => this.setState({movies:json.results}));
  }

  render(){
    console.log(this.state.movies);
    return(
      <React.Fragment>
        <Header />
        <MovieList movies={this.state.movies} />
      </React.Fragment>
    )
  }

}


export default MovieBox;
