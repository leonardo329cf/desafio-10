import { AxiosRequestConfig } from 'axios';
import { useEffect, useState } from 'react';
import { requestBackend } from '../../util/requests';
import ReviewEntry from './ReviewEntry';
import { Review } from '../../types/review';
import CardLoader from './CardLoader';

import './styles.css';
import { toast } from 'react-toastify';

type Props = {
  movieId: string;
  refresh?: number;
};

const Reviews = ({ movieId, refresh }: Props) => {

  const [reviews, setReviews] = useState<Review[]>();

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const params: AxiosRequestConfig = {
      method: 'GET',
      url: `/movies/${movieId}/reviews`,
      withCredentials: true,
    };

    setIsLoading(true);
    requestBackend(params)
      .then((response) => {
        setReviews(response.data);
      })
      .catch((error) => {
        toast.error("Falha ao carregar as avaliações")
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [movieId, refresh]);

  return (
    <div className="reviews-container bg-secondary">
      {isLoading ? (<CardLoader />) : (
        reviews?.map((review) => (
          <div className="review-entry" key={review.id}>
            <ReviewEntry review={review} />
          </div>
        ))) 
        }
    </div>
  );
};

export default Reviews;
