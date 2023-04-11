import "./App.css";
import BtnColourChange from "./component/BtnColourChange";
import BtnCounter from "./component/BtnCounter";
import CompA from "./component/bothcomponent/CompA";

function App() {
  return (
    <div className="App">
      <BtnCounter />
      <BtnColourChange />
      <CompA />
    </div>
  );
}

export default App;
