import ColorForm from "../ColorForm/ColorForm";
import CopyToClipboard from "../CopyToClipboard/CopyToClipboard";
import "./Color.css";
import { useState } from "react";

export default function Color({
  role,
  hex,
  contrastText,
  onDeleteColor,
  id,
  onUpdateColor,
}) {
  const [isConfirming, setIsConfirming] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  function handleEditColor(data) {
    onUpdateColor(id, data);
    setIsEditing(false);
  }
  return (
    <li
      className="color-card"
      style={{ backgroundColor: hex, color: contrastText }}
    >
      <p className="color__value--background color-card-headline">{hex}</p>
      <CopyToClipboard hex={hex} />
      <p className="color__role">{role}</p>
      <p className="color__value--contrast">{contrastText}</p>

      {isEditing ? (
        <>
          <ColorForm
            onSubmitColor={handleEditColor}
            buttonText="Update Color"
            initialHex={hex}
            initialContrastText={contrastText}
            initialRole={role}
          />
          <button
            type="button"
            style={{ color: "inherit" }}
            onClick={() => setIsEditing(false)}
          >
            Cancel
          </button>
        </>
      ) : !isConfirming ? (
        <>
          <button
            type="button"
            style={{ color: "inherit" }}
            onClick={() => setIsConfirming(true)}
          >
            Delete
          </button>
          <button
            type="button"
            style={{ color: "inherit" }}
            onClick={() => setIsEditing(true)}
          >
            Edit
          </button>
        </>
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
