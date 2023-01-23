import React from "react";
import { directors } from "../data";

function Directors() {
  const directorList = directors.map((director)=>{
    <div key ={director.id}>

      <h3>{director.name}</h3>
      <ul>
        {director.movies.map((e)=>{
          <li key={e}>{e}</li>
        })}
      </ul>
    </div>
  })
  return <div>
    <h1>Directors Page</h1>
    {directorList}
  </div>;
}

export default Directors;
