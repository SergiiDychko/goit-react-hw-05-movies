import { useEffect, useState } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';
import { fetchMovie } from '../../utils/fetchApi';
import { StyledGoBackBtn, StyledMovieDetails } from './MovieDetails.styled';
import { ReactComponent as ArrowLeft } from '../../icons/chevronleft.svg';


const baseURL = 'https://image.tmdb.org/t/p/original';

export default function MovieDetails() {
  const [movie, setMovie] = useState('');
  const { movieId } = useParams();

  useEffect(() => {
    fetchMovie(movieId).then(response => setMovie(response.data));
  }, [movieId]);
  const { poster_path, title, vote_average, overview, genres } = movie;
  return (
    <>
      <StyledMovieDetails>
        <img
          className="poster"
          src={baseURL + poster_path}
          alt={title}
          width="300"
          height="450"
        />
        <div className="movieInfo">
          <div className='wrap'>
            <h1 className="movieTitle">{title}</h1>
            <StyledGoBackBtn type="button">
              <ArrowLeft height="20" />
              <span>Go back</span>
            </StyledGoBackBtn>
          </div>
          <p className="text">
            User score:
            <span> {Math.round(vote_average*10)}%</span>
          </p>
          <h2 className="subtitle">Overview</h2>
          <p className="text">{overview}</p>
          <h3 className="subtitle">Genres</h3>
          <p className="text">
            {genres && genres.map(item => item.name).join(' ')}
          </p>
          <h3 className="subtitle">Additional information</h3>
          <div className="linkWrap">
            <Link to="cast" className="link">
              Cast
            </Link>
            <Link to="reviews" className="link">
              Reviews
            </Link>
          </div>
        </div>
      </StyledMovieDetails>
      <Outlet />
    </>
  );
}
