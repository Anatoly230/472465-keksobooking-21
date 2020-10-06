
let orderOfNumbers = (array) => {

  for (let i = 0; i < array.length; i++) {

let minNumber = array[i];

for (let j = i + 1; j < array.length; j++) {

let currentNumber = array[j];

  if (currentNumber < minNumber) {
  let  swap = minNumber;
  minNumber = currentNumber;
  array[j] = swap;
  array[i] = minNumber;

      }
    }
  }
  return array;
}


let getRandomInt = (max = 0,min = 0) => {
  return (Math.floor(Math.random() * Math.floor(max - min) + min));
};


let minMaxNumber = (array) => {

  let inOrder = orderOfNumbers(array);
  let min = inOrder.length - inOrder.length;
  let max = inOrder.length-1;
   return getRandomInt(array[max],array[min]);
};


let selectFromArray = (array) => {
  let max = array.length;
  let element = getRandomInt(max);
  return array[element];
};

};
