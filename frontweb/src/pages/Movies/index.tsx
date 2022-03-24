import { Link } from 'react-router-dom';
import { Movie } from '../../types/movie';
import MovieCard from '../../components/MovieCard';
import { SpringPage } from '../../types/spring';
import { useCallback, useEffect, useState } from 'react';
import { AxiosRequestConfig } from 'axios';
import { requestBackend } from 'util/requests';
import CardLoader from './CardLoader';
import Pagination from '../../components/Pagination';
import MovieFilter from '../../components/MovieFilter';
import { MovieFilterData } from '../../components/MovieFilter';
import './styles.css';

type ControlComponentsData = {
  activePage: number;
  filterData: MovieFilterData;
};

const Movies = () => {
  const [page, setPage] = useState<SpringPage<Movie>>();
  const [isLoading, setIsLoading] = useState(false);

  const [controlComponentsData, setControlComponentsData] =
    useState<ControlComponentsData>({
      activePage: 0,
      filterData: { genre: null },
    });

  const handleFilterChange = (filterData: MovieFilterData) => {
    setControlComponentsData({
      activePage: 0,
      filterData,
    });
  };

  const handlePageChange = (activePage: number) => {
    setControlComponentsData({
      filterData: controlComponentsData.filterData,
      activePage,
    })
  }
  const getMovies = useCallback(() => {
    const params: AxiosRequestConfig = {
      method: 'GET',
      url: '/movies',
      withCredentials: true,
      params: {
        page: controlComponentsData.activePage,
        linesPerPage: 4,
        genreId: controlComponentsData.filterData.genre?.id,
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
  }, [controlComponentsData]);

  useEffect(() => {
    getMovies();
  }, [getMovies]);

  return (
    <div className="movies-root-container">
      <div className="movies-container">
        <div className="movies-filter-container bg-secondary">
          <MovieFilter onChangeFilter={handleFilterChange} />
        </div>
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

          <div className="row">
            <Pagination
              pageCount={page ? page.totalPages : 0}
              range={3}
              onChange={handlePageChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Movies;
