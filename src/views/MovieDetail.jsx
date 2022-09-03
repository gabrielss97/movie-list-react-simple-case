import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { MovieService } from "../api/MovieService";

const MovieDetail = () => {
  let { id } = useParams();

  const [movie, setMovie] = useState({ id });

  const getMovie = async () => {
    const { data } = await MovieService.getMoviesDetail(id);

    setMovie(data);
  };

  useEffect(() => {
    getMovie();
  }, []);

  return (
    <section className="movie-detail">
      <Link to={`/`} className="btn btn-primary back">
        Voltar
      </Link>
      <div className="container">
        <div className="row gx-5">
          <div className="col-12">
            <img
              src={`https://image.tmdb.org/t/p/w400${movie.poster_path}`}
              alt=""
            />
          </div>
          <div className="col-12">
            <h1>{movie.title}</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <ul>
              <li>Budget: {movie.budget}</li>
              <li>Original language: {movie.original_language}</li>
              <li>Popularity: {movie.popularity}</li>
              <li>Overview: {movie.overview}</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MovieDetail;
