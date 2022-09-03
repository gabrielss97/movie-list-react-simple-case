import { useEffect, useState } from "react";
import { MovieService } from "../api/MovieService";
import MovieCard from "../components/MovieCard";

const Home = () => {
  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    const {
      data: { results },
    } = await MovieService.getMovies();

    setMovies(results);
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <>
      <h1>BRANCH GABRIEL</h1>
      <div className="container">
        {movies.map((movie) => (
          <div key={movie.id}>
            <MovieCard movie={movie} />
          </div>
        ))}
      </div>
    </>
  );
};

export default Home;
