import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [cards, setCards] = useState(0);
  return (
    <div className="App">
      <button onClick={() => setCards(cards + 1)} >add 1</button>
      <h1>Memory Card Game</h1>
      <Card />
    </div>
  );
}
function Card() {
  return (
    <div>
      <h1>Card</h1>
    </div>
  );
}

export default App;
