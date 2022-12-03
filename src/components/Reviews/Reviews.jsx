import { StyledReviews } from './Reviews.styles';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchReviews } from '../../utils/fetchApi';
import ReviewItem from './ReviewItem';

export default function Reviews() {
  const [reviews, setReviews] = useState('');
  const { movieId } = useParams();    

      useEffect(() => {
        fetchReviews(movieId).then(response => setReviews(response.data.results));
      }, [movieId]);
      return (
        <StyledReviews>
          {reviews.length !== 0 ? reviews.map(({ author_details, content, created_at, id }) => (
            <ReviewItem key={id} author={author_details} content={content} date={created_at} />
          )) : <li><p className='notify'>We don't have any reviews for this movie.</p></li>}
        </StyledReviews>
      );

}
