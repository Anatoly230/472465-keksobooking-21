'use strict';

const orderOfNumbers = (array) => {
  return array.sort(function (a, b) {
    return a - b;
  });
};


const getRandomInt = (max = 0, min = 0) => {
  return (Math.floor(Math.random() * Math.floor(max - min) + min));
};


const minMaxNumber = (array) => {

  let inOrder = orderOfNumbers(array);
  let min = inOrder.length - inOrder.length;
  let max = inOrder.length - 1;

  return getRandomInt(array[max], array[min]);
};


const selectFromArray = (array) => {
  let max = array.length;
  let element = getRandomInt(max);

  return array[element];
};

const countOfAds = 8;
const avatarImg = [1, 8];
const titleText = [`Природные парки, заповедники`, `Долина Гейзеров, Камчатка`, `Воробьевы горы`, `Патриаршие пруды`, `Чистые пруды`, `Парк «Коломенское»`, `Нескучный сад`];
const address = ``;
const price = [100000, 5000];
const type = [`palace`, `flat`, `house`, `bungalow`];
const rooms = [5, 1];
const guests = [10, 1];
const checkin = [`12:00`, `13:00`, `14:00`];
const checkout = [`12:00`, `13:00`, `14:00`];
const features = [`wifi`, `dishwasher`, `parking`, `washer`, `elevator`, `conditioner`];
const desсriptipon = [`«Остров Мечты» станет крайне привлекательной городской туристической достопримечательностью и встанет в один ряд с Кремлем, Парком Горького и ВДНХ`, `Усадьба Царицыно – единственное место в Москве, которое может похвастаться «Поющим световым фонтаном».`, `Музеон – место творческих людей. Здесь постоянно проводят выставки художников, музыкальные фестивали и видеоперфомансы. Сюда часто приходят за вдохновением и идеями.`];
const photos = [`http://o0.github.io/assets/images/tokyo/hotel1.jpg`, `http://o0.github.io/assets/images/tokyo/hotel2.jpg`, `http://o0.github.io/assets/images/tokyo/hotel3.jpg`];
const blockSze = [100, 1000];
const locX = blockSze;
const locY = [130, 630];


const getAdsOject = () => {
  return {
    author: {
      avatar: `img/avatars/user0` + minMaxNumber(avatarImg) + `.png`
    },
    offer: {
      title: selectFromArray(titleText),
      address: getRandomInt(locX) + `,` + minMaxNumber(locY),
      price: minMaxNumber(price),
      type: selectFromArray(type),
      rooms: minMaxNumber(rooms),
      guests: minMaxNumber(guests),
      checkin: selectFromArray(checkin),
      checkout: selectFromArray(checkout),
      features: selectFromArray(features),
      description: selectFromArray(desсriptipon),
      photos: selectFromArray(photos)
    },
    location: {
      x: minMaxNumber(locX),
      y: minMaxNumber(locY)
    }
  };
};


const getlistAds = (countAds) => {
  let arrayAds = [];
  for (let i = 0; i < countAds; i++) {
    arrayAds.push(getAdsOject());
  }
  return arrayAds;
};


const newAdsItem = getlistAds(countOfAds);

document.querySelector(`.map`).classList.remove(`map--faded`);

const renderOfAds = (arrayAds) => {
  const mapPins = document.querySelector(`.map__pins`);
  const fragment = document.createDocumentFragment();
  const mapPinTamplate = document.querySelector(`#pin`).content;

  for (let i = 0; i < arrayAds.length; i++) {

    const mapPinItem = mapPinTamplate.querySelector(`.map__pin`).cloneNode(true);
    const pinIcon = mapPinItem.querySelector('img');

    pinIcon.src = arrayAds[i].author.avatar;
    pinIcon.alt = arrayAds[i].offer.title;

    mapPinItem.style.left = arrayAds[i].location.x + (pinIcon.width / 2) + `px`;
    mapPinItem.style.top = arrayAds[i].location.y + pinIcon.height + `px`;


    arrayAds[i].offer.address = arrayAds[i].location.x + `, ` + arrayAds[0].location.y;

    fragment.appendChild(mapPinItem);

  }

  mapPins.appendChild(fragment);

};

renderOfAds(newAdsItem);




