import React from 'react';

import * as S from './styles';

const Card = ({ name, suit, code }) => (
  <S.CardContainer key={code}>
    <h3>{name}</h3>
    <span>{suit}</span>
  </S.CardContainer>
);

export default Card;
