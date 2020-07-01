import React, { useState } from 'react';
import { toast } from 'react-toastify';

import cardData from '../../helpers/cardData';
import calculateOdds from '../../helpers/pokerOddsCalculator';

import User from '../User';
import Card from '../Card';

import * as S from './styles';

const Board = () => {
  const [isStarted, setIsStarted] = useState(false);
  const [cards, setCards] = useState(cardData);
  const [playerOne, setPlayerOne] = useState({
    name: 'Matheus Souza',
    wins: 0,
    cards: [],
  });
  const [playerTwo, setPlayerTwo] = useState({
    name: 'Matheus Souza',
    wins: 0,
    cards: [],
  });
  const [tableCards, setTableCards] = useState([]);

  const dealCard = () => {
    const randomCard = cards[Math.floor(Math.random() * cards.length)];
    const randomCardIndex = cards.findIndex(
      (card) => randomCard.code === card.code
    );

    cards.splice(randomCardIndex, 1);

    setCards(cards);

    return randomCard;
  };

  const startGame = () => {
    const handPlayer1 = [dealCard(), dealCard()];
    setPlayerOne((prevState) => ({ ...prevState, cards: handPlayer1 }));
    const handPlayer2 = [dealCard(), dealCard()];
    setPlayerTwo((prevState) => ({ ...prevState, cards: handPlayer2 }));
    const table = [dealCard(), dealCard(), dealCard()];
    setTableCards(table);

    const { oddsPlayer1, oddsPlayer2 } = calculateOdds(
      handPlayer1,
      handPlayer2,
      table
    );

    if (oddsPlayer1 > oddsPlayer2) {
      setPlayerOne((prevState) => ({ ...prevState, wins: prevState.wins + 1 }));
      toast.success(
        `Vitoria do Jogador 1 com ${oddsPlayer1}% vs ${oddsPlayer2}% do Jogador 2`
      );
    } else if (oddsPlayer2 > oddsPlayer1) {
      setPlayerTwo((prevState) => ({ ...prevState, wins: prevState.wins + 1 }));
      toast.success(
        `Vitoria do Jogador 2 com ${oddsPlayer2}% vs ${oddsPlayer1}% do Jogador 1`
      );
    }

    setIsStarted(true);
  };

  const newRound = () => {
    setCards(cardData);
    setPlayerOne((prevState) => ({ ...prevState, cards: [] }));
    setPlayerTwo((prevState) => ({ ...prevState, cards: [] }));
    setTableCards((prevState) => ({ ...prevState, cards: [] }));
    setIsStarted(false);
  };

  return (
    <>
      <h2>Jogador 1</h2>
      <User name={playerOne.name} wins={playerOne.wins} />
      <S.BoardContainer>
        <S.CardsContainer>
          {playerOne.cards.length > 0 &&
            playerOne.cards.map((card) => (
              <Card
                key={card.code}
                name={card.name}
                suit={card.suit}
                code={card.code}
              />
            ))}
        </S.CardsContainer>
        {!isStarted && (
          <S.Button type="button" onClick={() => startGame()}>
            Iniciar
          </S.Button>
        )}
        {tableCards.length > 0 && (
          <S.CardsContainer>
            {tableCards.map((card) => (
              <Card name={card.name} suit={card.suit} code={card.code} />
            ))}
          </S.CardsContainer>
        )}

        <S.CardsContainer>
          {playerTwo.cards.length > 0 &&
            playerTwo.cards.map((card) => (
              <Card name={card.name} suit={card.suit} code={card.code} />
            ))}
        </S.CardsContainer>
      </S.BoardContainer>
      <User name={playerTwo.name} wins={playerTwo.wins} />
      <h2>Jogador 2</h2>
      {isStarted && (
        <S.Button type="button" onClick={() => newRound()}>
          Jogar Novamente
        </S.Button>
      )}
    </>
  );
};

export default Board;
