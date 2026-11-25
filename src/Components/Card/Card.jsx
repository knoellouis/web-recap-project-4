import "./Card.css";
import { useState } from "react";

export default function Card({ role, hex, contrastText, onDeleteColor, id }) {
  const [isConfirming, setIsConfirming] = useState(false);
  return (
    <li
      className="color-card"
      style={{ backgroundColor: hex, color: contrastText }}
    >
      <p className="color__value--background color-card-headline">{hex}</p>
      <p className="color__role">{role}</p>
      <p className="color__value--contrast">{contrastText}</p>
      {!isConfirming ? (
        <button
          type="button"
          style={{ color: "inherit" }}
          onClick={() => setIsConfirming(true)}
        >
          Delete
        </button>
      ) : (
        <>
          <p className="color-card-highlight">Really delete?</p>
          <button
            type="button"
            style={{ color: "inherit" }}
            onClick={() => setIsConfirming(false)}
          >
            Cancel
          </button>
          <button
            type="button"
            style={{ color: "inherit" }}
            onClick={() => onDeleteColor(id)}
          >
            Delete
          </button>
        </>
      )}
    </li>
  );
}
