import { render } from "@testing-library/react";
import React, { useState, useEffect } from "react";

const VisualSort = () => {
  const [barArray, SetBarArray] = useState([]);
  let generatedArray = [];
  function getRandomInt(min, max) {
    return Math.ceil(Math.random() * (max - min));
  }

  const startArray = () => {
    for (let i = 0; i < 25; i++) {
      generatedArray.push(getRandomInt(10, 200));
    }
    console.log(generatedArray);

  };

  useEffect(() => {
    startArray();
    SetBarArray(generatedArray);
  }, []);

  return (
    <div>
      {barArray.map((value, index) => (
        <div>{value}</div>
      ))}
    </div>
  );
};

export default VisualSort;
