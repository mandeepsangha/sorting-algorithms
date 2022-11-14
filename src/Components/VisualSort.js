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

  function BubbleSort(array) {
    //let swapped;
    let n = array.length;

    for (let j = 0; j < n - 1; j++) {
      for (let i = 0; i < array.length; i++) {
        if (array[i] > array[i + 1]) {
          let storeHigherNumber = array[i];
          array[i] = array[i + 1];
          array[i + 1] = storeHigherNumber;
        }
      }
    }

    return array;
  }

  return (
    <div className="back-bar">
      {barArray.map((value, id) => (
        <div
          className="bar-color"
          key={id}
          style={{ height: `${value}px` }}
        ></div>
      ))}
      <button
        onClick={() => {
          BubbleSort(barArray);
        }}
      >
        Sort Button
      </button>
    </div>
  );
};

export default VisualSort;
