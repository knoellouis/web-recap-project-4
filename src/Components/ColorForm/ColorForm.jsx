import "./ColorForm.css";
import { useState } from "react";

const initialHex = "#000000";
const initialContrastText = "#ffffff";
const initialRole = "primary main";

export default function ColorForm({ onAddColor }) {
  const [hex, setHex] = useState(initialHex);
  const [contrastText, setContrastText] = useState(initialContrastText);
  const [role, setRole] = useState(initialRole);

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    onAddColor(data);
    setHex(initialHex);
    setContrastText(initialContrastText);
    setRole(initialRole);
  }

  return (
    <>
      <form className="form__color-picker" onSubmit={handleSubmit}>
        <div className="form-field">
          <label htmlFor="role">Role</label>
          <input
            type="text"
            name="role"
            id="role"
            value={role}
            onInput={(event) => setRole(event.target.value)}
          />
        </div>
        <div className="form-field">
          <label htmlFor="hex">Hex</label>
          <input
            type="color"
            name="hex"
            id="hex"
            value={hex}
            onChange={(event) => setHex(event.target.value)}
          />
        </div>
        <div className="form-field">
          <label htmlFor="contrast-text">Contrast Text</label>
          <input
            type="color"
            name="contrastText"
            id="contrast-text"
            value={contrastText}
            onChange={(event) => setContrastText(event.target.value)}
          />
        </div>
        <button type="submit">Add Color</button>
      </form>
    </>
  );
}
