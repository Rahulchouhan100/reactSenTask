import { useState } from "react";
import CompB from "./CompB";

const CompA = () => {
  const [cendol, setCendol] = useState(2);

  const handleCendol = (value) => {
    setCendol(value);
  };
  return (
    <div>
      <CompB cendol={cendol} setCendol={handleCendol} />
    </div>
  );
};

export default CompA;
