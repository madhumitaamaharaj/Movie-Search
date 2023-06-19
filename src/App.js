import React, { useState } from 'react';

const MovieSearch = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [movies, setMovies] = useState([]);

  const handleSearch = async () => {
    const apiKey = 'YOUR_OMDB_API_KEY';
    const response = await fetch(`https://www.omdbapi.com/?apikey=${apiKey}&s=${searchTerm}`);
    const data = await response.json();
    setMovies(data.Search);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search by title, actor, or director"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      <ul>
        {movies.map((movie) => (
          <li key={movie.imdbID}>
            <a href={`https://www.imdb.com/title/${movie.imdbID}`} target="_blank" rel="noreferrer">
              {movie.Title} ({movie.Year})
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieSearch;
