import { useState } from "react";
import "./btnCounter.css";

const BtnCounter = () => {
  const [counter, setCounter] = useState(1);

  const handleCounter = () => {
    setCounter(counter + 1);
  };

  const formattedCounter = counter.toString().padStart(2, "0");

  return (
    <div className="container">
      <div className="circle">
        <h2>{formattedCounter}</h2>
        <button onClick={handleCounter}>click to increase counter</button>
      </div>
    </div>
  );
};

export default BtnCounter;
