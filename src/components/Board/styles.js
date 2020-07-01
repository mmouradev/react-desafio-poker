import styled from 'styled-components';

export const BoardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  flex: 1;
  width: 100%;
  border-radius: 30%;
  border: 20px solid #333;
  background-color: #014f1a;
  margin: 10px 0;
`;

export const CardsContainer = styled.div`
  display: flex;
`;

export const Button = styled.button`
  font-size: 18px;
  color: #fff;
  text-transform: uppercase;
  padding: 8px 12px;
  border: none;
  border-radius: 8px;
  background-color: #ff7098;
`;
