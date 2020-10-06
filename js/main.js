
let orderOfNumbers = (array) => {

  for (let i = 0; i < array.length; i++) {

    let minNumber = array[i];

    for (let j = i + 1; j < array.length; j++) {

      let currentNumber = array[j];

      if (currentNumber < minNumber) {
        let swap = minNumber;
        minNumber = currentNumber;
        array[j] = swap;
        array[i] = minNumber;

      }
    }
  }
  return array;
}


let getRandomInt = (max = 0, min = 0) => {
  return (Math.floor(Math.random() * Math.floor(max - min) + min));
};


let minMaxNumber = (array) => {

  let inOrder = orderOfNumbers(array);
  let min = inOrder.length - inOrder.length;
  let max = inOrder.length - 1;

  return getRandomInt(array[max], array[min]);
};


let selectFromArray = (array) => {
  let max = array.length;
  let element = getRandomInt(max);

  return array[element];
};

let countOfAds = 8;
let avatarImg = [1, 8];
let title = `Lorem ipsum dolor sit amet`;
let locationX = [700, 500];
let locationY = [500, 300];
let price = [100000, 5000];
let type = [`palace`, `flat`, `house`, `bungalow`];
let rooms = [5, 1];
let guests = [10, 1]
let checkin = [`12:00`, `13:00`, `14:00`];
let checkout = [`12:00`, `13:00`, `14:00`];
let features = [`wifi`, `dishwasher`, `parking`, `washer`, `elevator`, `conditioner`]
let desсriptipon = `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`;
let photos = [`http://o0.github.io/assets/images/tokyo/hotel1.jpg`, `http://o0.github.io/assets/images/tokyo/hotel2.jpg`, `http://o0.github.io/assets/images/tokyo/hotel3.jpg`];
let blockSze = 300;
let locX = 300;
let locY = [130, 630];


let getAdsOject = () => {
  return {
    author: {
      avatar: `img/avatars/user0` + minMaxNumber(avatarImg) + `.png`
    },
    offer: {
      title: title,
      address: minMaxNumber(locationX) + `,` + minMaxNumber(locationY),
      price: minMaxNumber(price),
      type: selectFromArray(type),
      rooms: minMaxNumber(rooms),
      guests: minMaxNumber(guests),
      checkin: selectFromArray(checkin),
      checkout: selectFromArray(checkout),
      features: selectFromArray(features),
      description: desсriptipon,
      photos: selectFromArray(photos)
    },
    location: {
      x: getRandomInt(locX),
      y: minMaxNumber(locY)
    }
  }
};


let getlistAds = (counAds) => {
  let arrayAds = [];
  for (let i = 0; i < counAds; i++) {
    arrayAds[i] = getAdsOject();
  }
  return arrayAds;
}


getlistAds(countOfAds);
