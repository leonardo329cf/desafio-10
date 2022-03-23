import { useParams } from 'react-router-dom';
import Reviews from '../../components/Reviews';
import ReviewInsertCard from '../../components/ReviewInsertCard';
import { useState } from 'react';
import { isMember } from '../../util/auth';
import MovieDetailsCard from '../../components/MovieDetailsCard';
import './styles.css';

type UrlParams = {
  movieId: string;
};

const MovieDetails = () => {
  const { movieId } = useParams<UrlParams>();

  const [refreshCounter, setRefreshCounter] = useState(0);

  const refresh = () => {
    setRefreshCounter(refreshCounter + 1);
  };

  return (
    <div className="movie-detail-root-container">
      <div className="movie-detail-container">
        <MovieDetailsCard movieId={parseInt(movieId)} />
        {isMember() && <ReviewInsertCard movieId={movieId} refresh={refresh} />}
        <Reviews movieId={movieId} refresh={refreshCounter} />
      </div>
    </div>
  );
};

export default MovieDetails;
