import "./Card.css";

export default function Card({ role, hex, contrastText }) {
  return (
    <li className="card" style={{ backgroundColor: hex, color: contrastText }}>
      <p className="color__value--background">{hex}</p>
      <p className="color__role">{role}</p>
      <p className="color__value--contrast">{contrastText}</p>
    </li>
  );
}
