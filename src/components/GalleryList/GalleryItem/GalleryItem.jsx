import { StyledItem } from './GalleryItem.styled';
import { Link, useParams } from 'react-router-dom';

const baseURL = 'https://image.tmdb.org/t/p/original';
export default function GalleryItem({
  id,
  imgSrc,
  title = 'unknown name',
  text = 'no description',
}) {
  return (
    <StyledItem>
      <Link className='link' to={`movies/${id}`}>
        <img
          className="poster"
          src={baseURL + imgSrc}
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
