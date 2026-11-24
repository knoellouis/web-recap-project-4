import "./Card.css";

export default function Card({ bgColor, fontColor }) {
  return (
    <div className="card" style={{ backgroundColor: bgColor }}>
      <p className="color__value--background">{bgColor}</p>
      <p className="color__role">Main Color</p>
      <p className="color__value--contrast" style={{ color: fontColor }}>
        {fontColor}
      </p>
    </div>
  );
}
