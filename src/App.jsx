import { useState } from "react";
import { initialColors } from "./lib/colors";
import { nanoid } from "nanoid";
import Card from "./Components/Card/Card";
import ColorForm from "./Components/ColorForm/ColorForm";
import "./App.css";

function App() {
  const [cards, setCards] = useState(initialColors);

  function handleAddColor(newColor) {
    const newColorWithId = { id: nanoid(), ...newColor };
    setCards([newColorWithId, ...cards]);
  }
  return (
    <div className="main">
      <h1>Theme Creator</h1>
      <ColorForm onAddColor={handleAddColor} />
      <ul className="cards">
        {cards.map((card) => (
          <Card
            key={card.id}
            hex={card.hex}
            contrastText={card.contrastText}
            role={card.role}
          />
        ))}
      </ul>
    </div>
  );
}

export default App;
