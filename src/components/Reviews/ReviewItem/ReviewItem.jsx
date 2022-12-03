import { StyledReview } from './ReviewItem.styled';
import defaultAvatar from '../../../images/UserDefaultAvatar.jpg';
const baseURL = 'https://image.tmdb.org/t/p/original';

export default function ReviewItem({ author, content, date }) {
    const { avatar_path, name, username, rating } = author;
    const authorName = name !== '' ? name : username;
  const avatar = !avatar_path || avatar_path.includes('www')
    ? defaultAvatar
    : baseURL + avatar_path;
    return (
      <StyledReview>
        <div className="userWrap">
          <img
            className="avatar"
            src={avatar}
            alt={authorName}
            width="50"
            height="50"
          />
          <div className="userInfo">
            <h3 className="username">{authorName}</h3>
            <p className="rating">Rating: {rating}</p>
          </div>
        </div>
        <p className="reviewText">{content}</p>
        <p className="reviewDate">
          Posted: {(date.slice(0, 10) + ' ' + date.slice(11, 19))}
        </p>
      </StyledReview>
    );
}
