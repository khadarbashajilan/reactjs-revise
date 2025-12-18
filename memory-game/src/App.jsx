import { useEffect, useState } from "react";
import GameHeader from "./components/GameHeader";
import "./index.css";
import Card from "./components/Card";

const cardValues = [
  "🍎",
  "🍌",
  "🍇",
  "🍊",
  "🍓",
  "🥝",
  "🍑",
  "🍒",
  "🍎",
  "🍌",
  "🍇",
  "🍊",
  "🍓",
  "🥝",
  "🍑",
  "🍒",
];

function App() {
  let [cards, setCards] = useState([]);
  let [flippedCards, setflippedCards] = useState([]);

  // let [cards, setCards] = useState()
  const initializeGame = () => {
    const finalCards = cardValues.map((value, index) => ({
      idx: index,
      value,
      isFlipped: false,
      isMatched: false,
    }));
    setCards(finalCards);
  };

  useEffect(() => {
    initializeGame();
  }, []);

  const handleCardClick = (card) => {
    if (card.isFlipped || card.isMatched) {
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
        setTimeout(() => {
          alert("Matched");
        }, 500);
      } else {
        setTimeout(() => {
          const flippedBackCards = newCards.map((c) => {
            return newFlippedcards.includes(c.idx) || c.idx === card.idx
              ? { ...c, isFlipped: false }
              : c;
          });
          setCards(flippedBackCards);
          setflippedCards([])
        }, 1000);
      }
    }
  };

  return (
    <div className="app">
      <GameHeader score={0} moves={0} onReset={initializeGame} />

      <div className="cards-grid">
        {cards.map((card) => {
          return <Card card={card} onClick={() => handleCardClick(card)} />;
        })}
      </div>
    </div>
  );
}
export default App;
