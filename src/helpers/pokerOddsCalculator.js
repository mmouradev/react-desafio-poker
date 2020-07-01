import { CardGroup, OddsCalculator } from 'poker-odds-calculator';

const handString = (cards) => cards.map((card) => card.code).join('');

const calculateOdds = (cardsPlayer1, cardsPlayer2, table) => {
  const handPlayer1 = CardGroup.fromString(handString(cardsPlayer1));
  const handPlayer2 = CardGroup.fromString(handString(cardsPlayer2));
  const tableCards = CardGroup.fromString(handString(table));

  const result = OddsCalculator.calculate(
    [handPlayer1, handPlayer2],
    tableCards
  );

  const oddsPlayer1 = result.equities[0].getEquity();
  const oddsPlayer2 = result.equities[1].getEquity();
  const tie = 100 - oddsPlayer1 - oddsPlayer2;

  return { oddsPlayer1, oddsPlayer2, tie };
};

export default calculateOdds;
