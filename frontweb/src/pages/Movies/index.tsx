import { Link } from 'react-router-dom';
import { Movie } from '../../types/movie';
import { Genre } from '../../types/genre';
import MovieCard from '../../components/MovieCard';

import './styles.css';

const genre: Genre = {
  id: 3,
  name: 'Drama',
};

const movie: Movie = {
  id: 6,
  title: 'A Voz do Silêncio',
  subTitle: 'Koe no Katachi',
  year: 2016,
  imgUrl:
    'https://image.tmdb.org/t/p/w533_and_h300_bestv2/5lAMQMWpXMsirvtLLvW7cJgEPkU.jpg',
  synopsis:
    'Nishimiya Shouko é uma estudante com deficiência auditiva. Durante o ensino fundamental, após se transferir para uma nova escola, Shouko passa a ser alvo de bullying e em pouco tempo precisa se transferir. O que ela não esperava é que alguns anos depois, Ishida Shouya, um dos valentões que tanto a fez sofrer no passado surgisse de novo em sua vida com um novo propósito.',
  genre,
};

const Movies = () => {
  return (
    <div className="movies-root-container">
      <div className="movies-container">
        <div className="movies-list-container container-fluid">
          <div className="row movie-list-row">
            <div className="movie-card-entry col-sm-6 col-xl-3">
              <Link to={`movies/${movie.id}`}>
                <MovieCard movie={movie} />
              </Link>
            </div>
            <div className="movie-card-entry col-sm-6 col-xl-3">
              <Link to={`movies/${movie.id}`}>
                <MovieCard movie={movie} />
              </Link>
            </div>
            <div className="movie-card-entry col-sm-6 col-xl-3">
              <Link to={`movies/${movie.id}`}>
                <MovieCard movie={movie} />
              </Link>
            </div>
            <div className="movie-card-entry col-sm-6 col-xl-3">
              <Link to={`movies/${movie.id}`}>
                <MovieCard movie={movie} />
              </Link>
            </div>
            <div className="movie-card-entry col-sm-6 col-xl-3">
              <Link to={`movies/${movie.id}`}>
                <MovieCard movie={movie} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Movies;
