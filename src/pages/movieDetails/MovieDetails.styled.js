import styled from "styled-components";

export const StyledMovieDetails = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;
  padding-bottom: 20px;
  border-bottom: 2px solid lightgray;

  .poster {
    width: 28%;
    height: 100%;
  }
  .movieInfo {
    width: 70%;
  }
  .movieTitle {
    font-size: 40px;
    margin-bottom: 30px;
  }
  .subtitle {
    font-size: 24px;
    margin-bottom: 10px;
  }
  .text {
    font-size: 18px;
    margin-bottom: 20px;
  }
  .linkWrap {
    display: flex;
  }
  .link {
    display: block;
    padding: 8px 16px;
    border-radius: 10px;
    text-decoration: none;
    color: black;
    font-weight: 500;

    :hover,
    :focus,
    :active {
      color: white;
      background-color: darkslategray;
      border-bottom: 4px solid greenyellow;
    }
  }
`;