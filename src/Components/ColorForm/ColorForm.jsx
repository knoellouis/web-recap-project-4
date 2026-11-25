import "./ColorForm.css";
import { useState } from "react";
import ColorInput from "../ColorInput/ColorInput";

const initialHex = "#000000";
const initialContrastText = "#ffffff";
const initialRole = "primary main";

export default function ColorForm({ onAddColor }) {
  const [role, setRole] = useState(initialRole);
  const [formKey, setFormKey] = useState(0);

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    onAddColor(data);
    setRole(initialRole);
    setFormKey(formKey + 1);
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
          <ColorInput
            key={formKey}
            initialColor={initialHex}
            id="hex"
            name="hex"
          />
        </div>
        <div className="form-field">
          <label htmlFor="contrast-text">Contrast Text</label>
          <ColorInput
            key={formKey}
            initialColor={initialContrastText}
            id="contrast-text"
            name="contrastText"
          />
        </div>
        <button type="submit">Add Color</button>
      </form>
    </>
  );
}
