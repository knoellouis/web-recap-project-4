import { useState } from "react";
import "./ColorForm.css";
// import { nanoid } from "nanoid";

export default function ColorForm({
  hexValue,
  contrastValue,
  role,
  setHexValue,
  setContrastValue,
  setRole,
}) {
  // const [hexValue, setHexValue] = useState("#000000");
  // const [contrastValue, setContrastValue] = useState("#ffffff");
  // const [role, setRole] = useState("");
  return (
    <>
      <form className="form__color-picker" onSubmit={handleSubmit}>
        <div className="form-field">
          <label htmlFor="role">Role</label>
          <input
            type="text"
            name="role"
            id="role"
            placeholder="Role"
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
            value={hexValue}
            onChange={(event) => setHexValue(event.target.value)}
          />
        </div>
        <div className="form-field">
          <label htmlFor="contrast-text">Contract Text</label>
          <input
            type="color"
            name="contrast-text"
            id="contrast-text"
            value={contrastValue}
            onChange={(event) => setContrastValue(event.target.value)}
          />
        </div>
        <button type="submit">Add Color</button>
      </form>
    </>
  );
}

function handleSubmit(event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  console.log(event.target.value);
  console.log(formData);
}
