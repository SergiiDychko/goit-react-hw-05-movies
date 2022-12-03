import styled from "styled-components";

export const StyledReview = styled.li`
  margin-bottom: 30px;
  padding: 10px;
  border: 2px solid darkslategray;
  border-radius: 0 20px 20px 20px;
  :nth-child(even) {
    border: 2px solid greenyellow;
  }

  .userWrap {
    display: flex;
    gap: 10px;
    margin-bottom: 10px;
  }
  .reviewText {
    margin-bottom: 10px;
  }
  .reviewDate {
    font-weight: 500;
  }
`;