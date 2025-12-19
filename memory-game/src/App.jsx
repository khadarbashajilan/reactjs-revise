import GameHeader from "./components/GameHeader";
import "./index.css";
import Card from "./components/Card";
import Winmessage from "./components/Winmessage";
import { ueseGameLogic } from "./hooks/useGamelogics";

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
  const {score, moves, initializeGame, handleCardClick, matchedCards, cards} = ueseGameLogic(cardValues)
  return (
    <div className="app">
      <GameHeader score={score} moves={moves} onReset={initializeGame} />
      {matchedCards.length === cardValues.length && <Winmessage moves={moves}/>} 

      <div className="cards-grid">
        {cards.map((card) => {
          return <Card card={card} onClick={() => handleCardClick(card)} />;
        })}
      </div>
    </div>
  );
}
export default App;
