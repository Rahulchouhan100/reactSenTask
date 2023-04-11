import { useState } from "react";
import "./btnCounter.css";

const BtnCounter = () => {
  const [counter, setCounter] = useState(1);
  const [buttonColor, setButtonColor] = useState("red");
  const [circleColor, setCircleColor] = useState("rgba(255, 214, 11, 0.954)");

  const handleCounter = (e, btnStyle) => {
    setCounter(counter + 1);
    setCircleColor(buttonColor);
  };

  const formattedCounter = counter.toString().padStart(2, "0");

  const btnStyle = {
    backgroundColor: buttonColor,
    border: "1px solid black",
    fontSize: ".6rem",
    cursor: "pointer",
    padding: ".2rem .5rem",
  };

  const circleStyle = {
    backgroundColor: circleColor,
    borderRadius: "50%",
    height: "9rem",
    width: "9rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  };

  return (
    <div className="container">
      <div style={circleStyle}>
        <h2>{formattedCounter}</h2>
        <button onClick={(e) => handleCounter(e, btnStyle)} style={btnStyle}>
          click to increase counter
        </button>
      </div>
    </div>
  );
};

export default BtnCounter;
