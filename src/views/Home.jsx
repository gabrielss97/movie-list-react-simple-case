import { useEffect, useState } from "react";
import { MovieService } from "../api/MovieService";
import MovieCard from "../components/MovieCard";

const Home = ({ searchValueProp }) => {
  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    const {
      data: { results },
    } = await MovieService.getMovies();

    setMovies(results);
  };

  const searchMovie = async (movieString) => {
    const {
      data: { results },
    } = await MovieService.searchMovies(movieString);

    setMovies(results);
  };

  useEffect(() => {
    getMovies();
  }, []);

  useEffect(() => {
    if (searchValueProp) {
      searchMovie(searchValueProp);
    }
  }, [searchValueProp]);

  return (
    <>
      <div className="container">
        {movies &&
          movies.map((movie) => (
            <div key={movie.id}>
              <MovieCard movie={movie} />
            </div>
          ))}
      </div>
    </>
  );
};

export default Home;
