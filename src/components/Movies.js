import React from "react";
import { movies } from "../data";

function Movies() {
    const MovieList = movies.map((movie)=>{
      <div key={movies.title}> 
      <h3>{movies.title}</h3>
      <h4>RunTime : {movies.time}</h4>

    <ul>

      {movies.genres.map((genre)=>{
        <li key={genre}>{genre}</li>
      })}
      
    </ul>

  </div>;
    })

  return (
    <div>
      <h1>Movie Page</h1>
      {MovieList}
    </div>
  )
   
}

export default Movies;
