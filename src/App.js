import React from "react";
import { Routes, Route, Link, useParams } from "react-router-dom";
import AddColor from "./AddColor";
import "./App.css";
import Movies from "./Movies";


function App() {
  return (

    <div className="App">
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
            </li>
          <li>
          <Link to="movies">Movies</Link>
          </li>
          <li>
          <Link to="color-game">Color-Game</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieid" element={<MovieDetails />} />
        <Route path="/color-game" element={<AddColor />} />
      </Routes>

    </div>
  );
}

export default App;

function Home(){
  return(
    <h1>Welcome to the Movie app 😊🎇🎇✨🎉🎉</h1>
  )
}

function MovieDetails(){
  const{movieid}=useParams()
  return(
    
      <h1>Movie Details Page {movieid}</h1>
  )
}