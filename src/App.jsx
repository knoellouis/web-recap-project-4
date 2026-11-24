import { useState } from "react";
import { initialColors } from "./lib/colors";
import Color from "./Components/Color/Color";
import Card from "./Components/Card/Card";
import ColorForm from "./Components/ColorForm/ColorForm";
import "./App.css";

function App() {
  const [hexValue, setHexValue] = useState("#000000");
  const [contrastValue, setContrastValue] = useState("#ffffff");
  const [role, setRole] = useState("");
  const [cards, setCards] = useState([]);
  return (
    <div className="main">
      <h1>Theme Creator</h1>
      <ColorForm hex={hexValue} contrast={contrastValue} role={role} />
      <ul className="cards">
        {initialColors.map((initialColor) => (
          <Card
            key={initialColor.id}
            hex={initialColor.hex}
            contrastText={initialColor.contrastText}
            role={initialColor.role}
          />
        ))}
      </ul>
    </div>
  );
}

export default App;
