import { useState } from "react";

export default function ColorInput({ id, name, initialColor }) {
  const [color, setColor] = useState(initialColor);
  return (
    <>
      <input
        type="text"
        name="color-text"
        value={color}
        onInput={(event) => setColor(event.target.value)}
      />
      <input
        type="color"
        name={name}
        id={id}
        value={color}
        onChange={(event) => setColor(event.target.value)}
      />
    </>
  );
}
