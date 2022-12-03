import GalleryItem from './GalleryItem';
import { StyledTitle, StyledList } from './GalleryList.styled';

export default function GalleryList({ title, gallery }) {
    return (
      <>
        <StyledTitle>{title}</StyledTitle>
        <StyledList>
          {gallery && gallery.map(({ id, title, name, poster_path, overview }) => (
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