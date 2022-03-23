import { Link } from 'react-router-dom';
import { Movie } from '../../types/movie';
import { Genre } from '../../types/genre';
import MovieCard from '../../components/MovieCard';
import { SpringPage } from '../../types/spring';
import { useEffect, useState } from 'react';
import { AxiosRequestConfig } from 'axios';
import { requestBackend } from 'util/requests';
import CardLoader from './CardLoader';

import './styles.css';

const Movies = () => {
  const [page, setPage] = useState<SpringPage<Movie>>();
  const [isLoading, setIsLoading] = useState(false);

  const getMovies = (pageNumber: number) => {
    const params: AxiosRequestConfig = {
      method: 'GET',
      url: '/movies',
      withCredentials: true,
      params: {
        page: pageNumber,
        linesPerPage: 4,
      },
    };

    setIsLoading(true);
    requestBackend(params)
      .then((response) => {
        setPage(response.data);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  useEffect(() => {
    getMovies(0);
  }, []);

  return (
    <div className="movies-root-container">
      <div className="movies-container">
        <div className="movies-list-container container-fluid">
          <div className="row movie-list-row">
            {isLoading ? (
              <CardLoader />
            ) : (
              page?.content.map((movie) => (
                <div
                  className="movie-card-entry col-sm-6 col-xl-3"
                  key={movie.id}
                >
                  <Link to={`/movies/${movie.id}`}>
                    <MovieCard movie={movie} />
                  </Link>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Movies;
