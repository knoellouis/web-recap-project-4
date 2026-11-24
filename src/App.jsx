import { initialColors } from "./lib/colors";
import Color from "./Components/Color/Color";
import Card from "./Components/Card/Card";
import Form from "./Components/Form/Form";
import "./App.css";

function App() {
  return (
    <div className="main">
      <h1>Theme Creator</h1>
      <Form />
      <div className="cards">
        <Card bgColor={"#CCDDFF"} fontColor={"#383838"} />
      </div>
    </div>
  );
}

export default App;
