import { AxiosRequestConfig } from 'axios';
import { useEffect, useState } from 'react';
import { Movie } from '../../types/movie';
import { requestBackend } from '../../util/requests';

import './styles.css';

type Props = {
  movieId: number;
};

const MovieDetailsCard = ({ movieId }: Props) => {
  const [movie, setMovie] = useState<Movie>();

  const [isLoading, setIsLoading] = useState(false);

  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const params: AxiosRequestConfig = {
      method: 'GET',
      url: `/movies/${movieId}`,
      withCredentials: true,
    };

    setIsLoading(true);
    requestBackend(params)
      .then((response) => {
        setHasError(false);
        setMovie(response.data);
      })
      .catch((error) => {
        setHasError(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [movieId]);

  return (
      <div className='movie-detail-card bg-secondary'>
          <div className='movie-detail-card-img-container'>
              <img src={movie?.imgUrl} alt='Movie'/>
          </div>
          <div className='movie-detail-content-container'>
              <div className='movie-detail-content-headers-container'>
                  <h2>{movie?.title}</h2>
                  <h3 className='text-tertiary'>{movie?.year}</h3>
                  <h4>{movie?.subTitle}</h4>
              </div>
              <div className='movie-detail-content-synopsis-container'>
                  <p>{movie?.synopsis}</p>
              </div>
          </div>
      </div>
  )
};

export default MovieDetailsCard;
