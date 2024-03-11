import React, { useState } from 'react';
import './App.css';
import movieData from './MovieData.json';

const mds = movieData.MovieDataBlah;

function MovieList() {
  const [listOfMovies, setListOfMovies] = useState(mds);
  const addMovie = () => {
    setListOfMovies([
      ...mds,
      {
        Category: 'Action/Adventure',
        Title: 'Batman Returns',
        Year: 1992,
        Director: 'Time Burton',
        Rating: 'PG-13',
      },
    ]);
  };
  return (
    <>
      <h3>Movie Collection List</h3>
      <table className="table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Year</th>
            <th>Director</th>
            <th>Rating</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
          {listOfMovies.map((m) => (
            <tr>
              <td>{m.Title}</td>
              <td>{m.Year}</td>
              <td>{m.Director}</td>
              <td>{m.Rating}</td>
              <td>{m.Category}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={addMovie}>Add Movie</button>
    </>
  );
}
function App() {
  return (
    <div className="App">
      <MovieList />
    </div>
  );
}
// this becomes a tag that you use to be able to render
// everything in the index
export default App;
