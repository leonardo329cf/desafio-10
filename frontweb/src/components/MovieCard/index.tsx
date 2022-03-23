import { Movie } from '../../types/movie';
import './styles.css';

type Props = {
  movie: Movie;
};

const MovieCard = ({ movie }: Props) => {
  return (
    <div className="movie-card bg-secondary">
      <img src={movie?.imgUrl} alt="movie-poster" />
      <div className="movie-card-content">
          <h2>{movie?.title}</h2>
          <h3 className="text-tertiary">{movie?.year}</h3>
          <h4>{movie?.subTitle}</h4>
      </div>
    </div>
  );
};

export default MovieCard;
