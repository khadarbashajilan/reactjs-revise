import { useState, useEffect } from "react";

export const ueseGameLogic = (cardValues) => {
  const [cards, setCards] = useState([]);
  const [flippedCards, setflippedCards] = useState([]);
  const [matchedCards, setmatchedCards] = useState([]);
  const [score, setScore] = useState(0);
  const [moves, setMoves] = useState(0);

  const shuffle_arr = (arr) => {
    const shuffled = [...arr];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  const initializeGame = () => {
    const shuffled = shuffle_arr(cardValues);
    const finalCards = shuffled.map((value, index) => ({
      idx: index,
      value,
      isFlipped: false,
      isMatched: false,
    }));
    setCards(finalCards);
    setflippedCards([]);
    setmatchedCards([]);
    setScore(0);
    setMoves(0);
  };

  useEffect(() => {
    initializeGame();
  }, []);

  const handleCardClick = (card) => {
    if (card.isFlipped || card.isMatched || flippedCards.length === 2) {
      return;
    }
    const newCards = cards.map((c) => {
      if (c.idx === card.idx) {
        return { ...c, isFlipped: true };
      } else {
        return c;
      }
    });
    setCards(newCards);

    const newFlippedcards = [...flippedCards, card.idx];
    setflippedCards(newFlippedcards);

    if (flippedCards.length === 1) {
      const firstCard = cards[flippedCards[0]];
      if (card.value === firstCard.value) {
        setmatchedCards((prev) => [...prev, firstCard.idx, card.idx]);
        setScore((prev) => prev + 1);

        setTimeout(() => {
          setCards((prev) =>
            prev.map((c) => {
              if (c.idx === firstCard.idx || c.idx === card.idx) {
                return { ...c, isMatched: true };
              } else {
                return c;
              }
            })
          );
          setflippedCards([]);
        }, 500);
      } else {
        setTimeout(() => {
          const flippedBackCards = newCards.map((c) => {
            return newFlippedcards.includes(c.idx) || c.idx === card.idx
              ? { ...c, isFlipped: false }
              : c;
          });
          setCards(flippedBackCards);
          setflippedCards([]);
        }, 1000);
      }
      setMoves((prev) => prev + 1);
    }
  };
  return {
    cards,
    score,
    moves,
    initializeGame,
    handleCardClick,
    matchedCards,
  };
};
