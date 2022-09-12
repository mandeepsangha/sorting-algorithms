import { render } from "@testing-library/react";
import React, { useState, useEffect } from "react";

const VisualSort = () => {
  const [barArray, SetBarArray] = useState([]);
  let generatedArray = [];
  function getRandomInt(min, max) {
    return Math.ceil(Math.random() * (max - min));
  }

  const startArray = () => {
    for (let i = 0; i < 40; i++) {
      generatedArray.push(getRandomInt(10, 400));
    }
    console.log(generatedArray);
  };

  useEffect(() => {
    startArray();
    SetBarArray(generatedArray);
  }, []);

  return (
    <div className="back-bar">
      {barArray.map((value, id) => (
        <div
          className="bar-color"
          key={id}
          style={{ height: `${value}px` }}
        ></div>
      ))}
      <btn>Sort Button</btn>
    </div>
  );
};

export default VisualSort;
