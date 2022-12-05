import { StyledReviews } from './Reviews.styles';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchReviews } from '../../utils/fetchApi';
import ReviewItem from './ReviewItem';
import Loader from '../Loader';

export default function Reviews() {
  const [reviews, setReviews] = useState('');
  const [loading, setLoading] = useState(false);

  const { movieId } = useParams();

  useEffect(() => {
    setLoading(true);
    fetchReviews(movieId)
      .then(response => setReviews(response.data.results))
      .catch(error => console.log('Something went wrong'))
      .finally(() => setLoading(false));
  }, [movieId]);

  return (
    <>
      {loading && <Loader />}
      <StyledReviews>
        {reviews.length !== 0 &&
          reviews.map(({ author_details, content, created_at, id }) =>
            <ReviewItem
              key={id}
              author={author_details}
              content={content}
              date={created_at}
            />
          )}
        {!loading && reviews.length === 0 && <li>
            <p className="notify">We don't have any reviews for this movie.</p>
          </li>
        }
      </StyledReviews>
    </>
  );
}
