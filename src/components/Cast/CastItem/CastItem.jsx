import { StyledCastItem } from './CastItem.styled';
import profilePic from '../../../images/ProfileDefaultImg.jpg';

export default function CastItem({ imgSrc, name, character }) {
  return (
    <StyledCastItem>
      <img className="photo" src={imgSrc ?? profilePic} alt={name} width="75" height="100" />
      <h3 className="name">{name}</h3>
      <p className="character">{character}</p>
    </StyledCastItem>
  );
}
