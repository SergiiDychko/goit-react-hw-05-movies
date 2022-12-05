import { Suspense, useEffect, useState } from 'react';
import { Link, Outlet, useNavigate, useParams } from 'react-router-dom';
import { fetchMovie } from '../../utils/fetchApi';
import Loader from '../../components/Loader';
import { StyledMovieDetails, StyledNotify } from './MovieDetails.styled';
import { ReactComponent as ArrowLeft } from '../../icons/chevronleft.svg';
import sadFrog from '../../images/sadFrog.png';
import defaultPoster from '../../images/NoImageAvailable.jpg';

const baseURL = 'https://image.tmdb.org/t/p/original';

export default function MovieDetails() {
  const [movie, setMovie] = useState('');
  const [loading, setLoading] = useState(false);
  const { movieId } = useParams('');
  const navigate = useNavigate()
  const { poster_path, title, vote_average, overview, genres, release_date = 'unknown' } =
    movie;

  useEffect(() => {
    if (movieId === '') { return }
    setLoading(true);
    fetchMovie(movieId)
      .then(response => setMovie(response.data))
      .catch(error => console.log('promise error'))
      .finally(() => setLoading(false));
    
  }, [movieId]);
  return (
    <>
      {movie !== '' && (
        <StyledMovieDetails>
          <img
            className="poster"
            src={poster_path ? baseURL + poster_path : defaultPoster}
            alt={title}
            width="300"
            height="450"
          />
          <div className="movieInfo">
            <div className="wrap">
              <h1 className="movieTitle">{title}</h1>
              <Link onClick={() => navigate(-1)} className="goBack">
                <ArrowLeft height="20" />
                <span>Go back</span>
              </Link>
            </div>
            <p className="text">
              Release:
              <span> {release_date.slice(0, 4)}</span>
            </p>
            <p className="text">
              User score:
              <span> {Math.round(vote_average * 10)}%</span>
            </p>
            <h2 className="subtitle">Overview</h2>
            <p className="text">{overview}</p>
            <h3 className="subtitle">Genres</h3>
            <p className="text">
              {genres && genres.map(item => item.name).join(' ')}
            </p>
            <h3 className="subtitle">Additional information</h3>
            <div className="linkWrap">
              <Link to="cast" replace className="link">
                Cast
              </Link>
              <Link to="reviews" replace className="link">
                Reviews
              </Link>
            </div>
          </div>
        </StyledMovieDetails>
      )}
      {!loading && movie === '' && (
        <StyledNotify>
          <img src={sadFrog} alt="sad frog" width="100" />
          <span>We don't have any information about this movie</span>
        </StyledNotify>
      )}
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
}
