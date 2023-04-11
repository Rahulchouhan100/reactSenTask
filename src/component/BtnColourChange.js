import React, { useState } from "react";

const BtnColourChange = () => {
  const [isRed, setIsRed] = useState(false);

  const btnColor = {
    backgroundColor: isRed ? "red" : "blue",
    padding: "5px 10px",
    border: "none",
    borderRadius: "3px",
    cursor: "pointer",
  };

  const handleClick = () => {
    setIsRed(!isRed);
  };
  return (
    <div>
      <button style={btnColor} onClick={handleClick}>
        Change Color
      </button>
    </div>
  );
};

export default BtnColourChange;
