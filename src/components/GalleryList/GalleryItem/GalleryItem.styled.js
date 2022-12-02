import styled from 'styled-components';

export const StyledItem = styled.li`
  width: 200px;
  height: 500px;
  cursor: pointer;
  overflow: hidden;
  text-overflow: ellipsis;
  border-radius: 10px;
  padding-bottom: 10px;

  .poster {
    width: 100%;
  }
  .title {
    padding: 10px;
    font-size: 18px;
  }
  .overview {
    font-size: 14px;
    padding: 0 10px;
  }
  .link {
    text-decoration: none;
    color: black;
    :hover,
    :focus {
      color: white;
    }
  }
  :hover,
  :focus {
    background-color: darkslategray;
  }
`;