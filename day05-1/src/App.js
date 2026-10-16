import logo from './logo.svg';
import './App.css';
import Movie from './components/Movie';
import { useState } from 'react';

function App() {

  const [movieTitle, setMovieTitle] = useState('')
  const [movieYear, setMovieYear] = useState('')

  const movies = [
    { title: 'title 1', year: 2001 },
    { title: 'title 2', year: 2010 },
    { title: 'title 3', year: 2020 },
  ]

  const renderMovies = movies.map(movie => {

    return (
      <Movie movie={movie} />
    )
  })

  return (
    <div className="App">

      <h1>Movie list</h1>

      <form>
        <input placeholder='영화제목' value={movieTitle}
          onChange={(e) => { setMovieTitle(e.target.value) }} />

        <input placeholder='개봉년도' value={movieYear}
          onChange={(e) => { setMovieYear(e.target.value) }} />
      </form>
      {renderMovies}
    </div>
  );
}

export default App;
