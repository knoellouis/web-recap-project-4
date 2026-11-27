import { initialColors } from "./lib/colors";
import { initialThemes } from "./lib/themes";
import { nanoid } from "nanoid";
import { useState } from "react";
import useLocalStorageState from "use-local-storage-state";
import Color from "./Components/Color/Color";
import ColorForm from "./Components/ColorForm/ColorForm";
import "./App.css";

function App() {
  const [colors, setColors] = useLocalStorageState("colors", {
    defaultValue: [...initialColors],
  });

  const [themes, setThemes] = useState(initialThemes);
  const [selectedThemeId, setSelectedThemeId] = useState("t1");
  const [isEditingTheme, setIsEditingTheme] = useState(false);

  const selectedTheme = themes.find((theme) => theme.id === selectedThemeId);

  const visibleColors = colors.filter((color) =>
    selectedTheme.colors.includes(color.id),
  );

  function handleAddColor(newColor) {
    const newColorWithId = { id: nanoid(), ...newColor };
    setColors([newColorWithId, ...colors]);
    setThemes(
      themes.map((theme) =>
        theme.id === selectedThemeId
          ? { ...theme, colors: [newColorWithId.id, ...theme.colors] }
          : theme,
      ),
    );
  }
  function handleDeleteColor(id) {
    const newColors = colors.filter((card) => card.id !== id);
    setColors(newColors);
    setThemes(
      themes.map((theme) => ({
        ...theme,
        colors: theme.colors.filter((colorId) => colorId !== id),
      })),
    );
  }
  function handleUpdateColor(id, updatedColor) {
    const newColor = colors.map((color) => {
      return color.id === id ? { id, ...updatedColor } : color;
    });
    setColors(newColor);
  }

  function handleAddTheme(event) {
    event.preventDefault();
    const name = new FormData(event.target).get("name");
    const newTheme = { id: nanoid(), name, colors: [] };
    setThemes([...themes, newTheme]);
    setSelectedThemeId(newTheme.id);
    event.target.reset();
  }

  function handleDeleteTheme() {
    const idsToRemove = selectedTheme.colors;
    setColors(colors.filter((color) => !idsToRemove.includes(color.id)));
    setThemes(themes.filter((theme) => theme.id !== selectedThemeId));
    setSelectedThemeId("t1");
  }

  function handleEditTheme(event) {
    event.preventDefault();
    const name = new FormData(event.target).get("name");
    setThemes(
      themes.map((theme) =>
        theme.id === selectedThemeId ? { ...theme, name } : theme,
      ),
    );
    setIsEditingTheme(false);
  }

  return (
    <div className="main">
      <h1>Theme Creator</h1>
      <select
        value={selectedThemeId}
        onChange={(event) => {
          setSelectedThemeId(event.target.value);
          setIsEditingTheme(false);
        }}
      >
        {themes.map((theme) => (
          <option key={theme.id} value={theme.id}>
            {theme.name}
          </option>
        ))}
      </select>
      <button
        type="button"
        onClick={() => setIsEditingTheme(true)}
        disabled={selectedTheme.id === "t1"}
      >
        Edit Theme
      </button>
      <button
        type="button"
        onClick={handleDeleteTheme}
        disabled={selectedTheme.id === "t1"}
      >
        Delete Theme
      </button>

      {isEditingTheme ? (
        <form key={selectedThemeId} onSubmit={handleEditTheme}>
          <input
            type="text"
            name="name"
            defaultValue={selectedTheme.name}
            required
          />
          <button type="submit">Save</button>
          <button type="button" onClick={() => setIsEditingTheme(false)}>
            Cancel
          </button>
        </form>
      ) : (
        <form onSubmit={handleAddTheme}>
          <input
            type="text"
            name="name"
            placeholder="New theme name"
            required
          />
          <button type="submit">Add Theme</button>
        </form>
      )}
      <ColorForm onSubmitColor={handleAddColor} buttonText="Add Color" />
      {visibleColors.length === 0 ? (
        <p>No colors yet. Add your first color above!</p>
      ) : (
        <ul className="cards">
          {visibleColors.map((card) => (
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
