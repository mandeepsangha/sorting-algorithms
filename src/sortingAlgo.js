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

export default BubbleSort;

let array2 = BubbleSort([0, 7, 4, 2, 1, 3]);

console.log(array2);
