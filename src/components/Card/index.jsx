import React from 'react';

import * as S from './styles';

const Card = ({ name, suit }) => (
  <S.CardContainer color={suit === '♦' || suit === '♥' ? '#ff0000' : '#000000'}>
    <h3>{name}</h3>
    <span>{suit}</span>
  </S.CardContainer>
);

export default Card;
