import { StyledCast } from './Cast.styles';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCast } from '../../utils/fetchApi';
import CastItem from './CastItem';
import Loader from '../Loader';

const baseURL = 'https://image.tmdb.org/t/p/original';

export default function Cast() {
  const [cast, setCast] = useState('');
  const [loading, setLoading] = useState(false);
  const { movieId } = useParams();
  useEffect(() => {
    setLoading(true);
    fetchCast(movieId)
      .then(response => setCast(response.data.cast))
      .catch(error => console.log('Something went wrong'))
      .finally(() => setLoading(false));
  }, [movieId]);

  return (
    <>
      {loading && <Loader />}
      <StyledCast>
        {cast.length !== 0 &&
          cast.map(({ profile_path, original_name, character, id }) => (
            <CastItem
              key={id}
              imgSrc={profile_path ? baseURL + profile_path : null}
              name={original_name}
              character={character}
            />
          ))}
        {!loading && cast.length === 0 && (
          <li>
            <p className="notify">
              We don't have any cast information for this movie.
            </p>
          </li>
        )}
      </StyledCast>
    </>
  );
}
