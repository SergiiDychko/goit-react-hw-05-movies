import PropTypes from 'prop-types';
import GalleryItem from './GalleryItem';
import { StyledTitle, StyledList } from './GalleryList.styled';

export default function GalleryList({ title, gallery }) {
  return (
    <>
      <StyledTitle>{title}</StyledTitle>
      <StyledList>
        {gallery &&
          gallery.map(({ id, title, name, poster_path, overview }) => (
            <GalleryItem
              key={id}
              id={id}
              imgSrc={poster_path}
              title={title || name}
              text={overview}
            />
          ))}
      </StyledList>
    </>
  );
}

GalleryList.propTypes = {
  title: PropTypes.string,
  gallery: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string,
      name: PropTypes.string,
      poster_path: PropTypes.string.isRequired,
      overview: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};
