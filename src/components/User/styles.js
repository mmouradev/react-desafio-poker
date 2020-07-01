import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px 0;
  img {
    height: 64px;
    width: 64px;
    border-radius: 50%;
  }

  div {
    margin-left: 16px;

    h3 {
      color: #333;
      font-weight: bold;
    }
  }
`;
