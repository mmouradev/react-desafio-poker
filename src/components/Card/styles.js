import styled, { css } from 'styled-components';

export const CardContainer = styled.div`
  padding: 16px 20px;
  margin: 0 5px;
  background: #fff;
  border: none;
  border-radius: 8px;
  ${(props) =>
    props.color &&
    css`
      color: ${props.color};
    `}

  span {
    font-size: 20px;
  }
`;
