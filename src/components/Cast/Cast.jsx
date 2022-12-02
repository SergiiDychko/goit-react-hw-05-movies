import { StyledCast } from './Cast.styles';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCast } from '../../utils/fetchApi';
import CastItem from './CastItem';
const baseURL = 'https://image.tmdb.org/t/p/original';

export default function Cast() {
  const [cast, setCast] = useState('');
  const { movieId } = useParams();

  useEffect(() => {
    fetchCast(movieId).then(response => setCast(response.data.cast));
  }, [movieId]);

  return (
    <StyledCast>
      {cast &&
        cast.map(({ profile_path, original_name, character, id }) => (
          <CastItem
            key={id}
            imgSrc={profile_path ? (baseURL + profile_path) : null}
            name={original_name}
            character={character}
          />
        ))}
    </StyledCast>
  );
}
