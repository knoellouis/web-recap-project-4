import { useState } from "react";
import { initialColors } from "./lib/colors";
import { nanoid } from "nanoid";
import Color from "./Components/Color/Color";
import ColorForm from "./Components/ColorForm/ColorForm";
import "./App.css";

function App() {
  const [colors, setColors] = useState(initialColors);

  function handleAddColor(newColor) {
    const newColorWithId = { id: nanoid(), ...newColor };
    setColors([newColorWithId, ...colors]);
  }
  function handleDeleteColor(id) {
    const newCards = colors.filter((card) => card.id !== id);
    setColors(newCards);
  }
  return (
    <div className="main">
      <h1>Theme Creator</h1>
      <ColorForm onAddColor={handleAddColor} />
      {colors.length === 0 ? (
        <p>No colors yet. Add your first color above!</p>
      ) : (
        <ul className="cards">
          {colors.map((card) => (
            <Color
              key={card.id}
              hex={card.hex}
              contrastText={card.contrastText}
              role={card.role}
              onDeleteColor={handleDeleteColor}
              id={card.id}
            />
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
