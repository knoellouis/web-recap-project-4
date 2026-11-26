import { initialColors } from "./lib/colors";
import { nanoid } from "nanoid";
import useLocalStorageState from "use-local-storage-state";
import Color from "./Components/Color/Color";
import ColorForm from "./Components/ColorForm/ColorForm";
import "./App.css";

function App() {
  const [colors, setColors] = useLocalStorageState("colors", {
    defaultValue: [...initialColors],
  });

  function handleAddColor(newColor) {
    const newColorWithId = { id: nanoid(), ...newColor };
    setColors([newColorWithId, ...colors]);
  }
  function handleDeleteColor(id) {
    const newColors = colors.filter((card) => card.id !== id);
    setColors(newColors);
  }
  function handleUpdateColor(id, updatedColor) {
    const newColor = colors.map((color) => {
      return color.id === id ? { id, ...updatedColor } : color;
    });
    setColors(newColor);
  }

  return (
    <div className="main">
      <h1>Theme Creator</h1>
      <ColorForm onSubmitColor={handleAddColor} buttonText="Add Color" />
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
              onUpdateColor={handleUpdateColor}
            />
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
