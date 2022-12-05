import PropTypes from 'prop-types';
import { StyledItem } from './GalleryItem.styled';
import { Link, useLocation } from 'react-router-dom';
import defaultPoster from '../../../images/NoImageAvailable.jpg';
const baseURL = 'https://image.tmdb.org/t/p/original';

export default function GalleryItem({
  id,
  imgSrc,
  title = 'unknown name',
  text = 'no description',
}) {
  const location = useLocation();

  return (
    <StyledItem>
      <Link className="link" to={`/movies/${id}`} state={{ from: location }}>
        <img
          className="poster"
          src={imgSrc ? baseURL + imgSrc : defaultPoster}
          alt={title}
          width="150"
          height="200"
        />
        <h2 className="title">{title}</h2>
        <p className="overview">{text}</p>
      </Link>
    </StyledItem>
  );
}

GalleryItem.propTypes = {
  id: PropTypes.number.isRequired,
  imgSrc: PropTypes.string.isRequired,
  title: PropTypes.string,
  text: PropTypes.string.isRequired,
};