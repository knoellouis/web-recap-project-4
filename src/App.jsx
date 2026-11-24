import { initialColors } from "./lib/colors";
import Color from "./Components/Color/Color";
import Card from "./Components/Card/Card";
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

export default App;
