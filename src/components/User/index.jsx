import React from 'react';

import * as S from './styles';

const User = ({ name, wins }) => {
  return (
    <S.Container>
      <img
        src="https://avatars1.githubusercontent.com/u/20447581?s=460&u=d293753ed4170e3cfdc511190b9ac6a17430d260&v=4"
        alt=""
      />
      <div>
        <h3>{name}</h3>
        <p>
          Vitorias:
          {wins}
        </p>
      </div>
    </S.Container>
  );
};

export default User;
