import { initialColors } from "./lib/colors";
import Color from "./Components/Color/Color";
import "./App.css";

function App() {
  return (
    <>
      <h1>Theme Creator</h1>
      <div className="cards">
        <Card bgColor={"#CCDDFF"} fontColor={"#383838"} />
      </div>
    </>
  );
}

function Card({ bgColor, fontColor }) {
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

export default App;
