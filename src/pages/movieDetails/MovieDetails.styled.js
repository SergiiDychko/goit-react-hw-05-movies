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
  .wrap {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
  }
  .movieTitle {
    font-size: 40px;
    margin-bottom: 25px;
  }
  .subtitle {
    font-size: 24px;
    margin-bottom: 10px;
  }
  .text {
    font-size: 18px;
    margin-bottom: 15px;
  }
  .linkWrap {
    display: flex;
    gap: 20px;
  }
  .goBack {
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-bottom: 20px;
    min-width: 180px;
    height: 40px;
    padding: 8px 16px;
    font-size: 14px;
    font-weight: 700;
    color: black;
    text-decoration: none;
    text-transform: uppercase;
    background-color: white;
    border: 1px solid black;
    outline: none;
    border-radius: 10px;
    :hover,
    :focus {
      color: white;
      fill: white;
      background-color: darkslategray;
      border: none;
      border-bottom: 4px solid greenyellow;
    }
  }
  .link {
    display: block;
    padding: 8px 16px;
    border-radius: 10px;
    font-size: 18px;
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

export const StyledNotify = styled.div`
display: flex;
gap: 40px;
justify-content: center;
align-items: center;
margin-top: 50px;
font-size: 30px;
`