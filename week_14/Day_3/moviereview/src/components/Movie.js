import React from "react";


const Movie = (props) => {
  return (
    <div>
    <h3>{props.movie["display_title"]}</h3>
    <br></br>
    {props.movie["summary_short"]}
    <br></br>
    {props.movie["opening_date"]}
    <br></br>
    
    {props.movie["multimedia.src"]}

    <img
      src={props.movie.multimedia.src}
      alt={props.movie["multimedia.src"]}
     />
   </div>
)
}


export default Movie;
