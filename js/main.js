'use strict';

const mapFilters = document.querySelector(`.map__filters`);
const mapFilter = mapFilters.querySelectorAll(`select`);
const mapFeatures = document.querySelector(`.map__features`);
const featureInputs = mapFeatures.querySelectorAll(`input`);
const adForm = document.querySelector(`.ad-form`);
const adFormFieldSets = adForm.querySelectorAll(`fieldset`);
const mapPinMain = document.querySelector(`.map__pin--main`);
const imgPinWidth = document.querySelector(`img[alt="Метка объявления"]`).width;
const imgPinHeight = document.querySelector(`img[alt="Метка объявления"]`).height;
const inputAdress = document.querySelector(`input[name="address"]`);
const adFormSubmit = document.querySelector(`.ad-form__submit`);
const roomNumber = document.querySelector(`#room_number`);
const guestCount = document.querySelector(`#capacity`);


const getClaenOfPx = (toClean) => {
  let newValue = ``;
  if (toClean.indexOf(`x`)) {

    for (let i = 0; i < toClean.length - 2; i++) {
      newValue += toClean[i];
    }
  }
  return newValue;
};


inputAdress.value = `${imgPinWidth / 2 + parseInt(getClaenOfPx(mapPinMain.style.left), 10)}, ${imgPinHeight / 2 + parseInt(getClaenOfPx(mapPinMain.style.top), 10)}`;


const disableFields = (fields) => {

  fields.forEach((field) => {
    field.disabled = true;
  });

};

const enableField = (fields) => {

  fields.forEach((field) => {
    field.disabled = false;
  });

};


disableFields(adFormFieldSets);
disableFields(mapFilter);
disableFields(featureInputs);


const getActivationPage = () => {

  enableField(adFormFieldSets);
  enableField(mapFilter);
  enableField(featureInputs);
  document.querySelector(`.map`).classList.remove(`map--faded`);
  adForm.classList.remove(`ad-form--disabled`);
  inputAdress.value = `${imgPinWidth / 2 + parseInt(getClaenOfPx(mapPinMain.style.left), 10)}, ${imgPinHeight + parseInt(getClaenOfPx(mapPinMain.style.top), 10)}`;
};

mapPinMain.addEventListener(`mousedown`, (evt) => {

  if (evt.which === 1) {
    getActivationPage();
  }

});

mapPinMain.addEventListener(`keydown`, (evt) => {

  if (evt.key === `Enter`) {
    getActivationPage();
  }

});

adFormSubmit.addEventListener(`click`, (evt) => {

  const rooms = parseInt(roomNumber.value, 10);
  const guests = parseInt(guestCount.value, 10);
  let message = ``;

  guestCount.setCustomValidity(``);

  const errorMessege = (error) => {
    evt.preventDefault();
    guestCount.setCustomValidity(error);
    guestCount.reportValidity();
  };

  if (guests > rooms) {
    message = `Слишком много гостей для количества комнат`;
    errorMessege(message);
  } else if (rooms === 100 && guests > 0) {
    message = `100 комнат не для гостей, уберите гостей`;
    errorMessege(message);
  } else if (guests < 1 && rooms !== 100) {
    message = `Необходим хотбяы один гость`;
    errorMessege(message);
  }

});


// const orderOfNumbers = (array) => {
//   return array.sort(function (a, b) {
//     return a - b;
//   });
// };


// const getRandomInt = (max = 0, min = 0) => {
//   return (Math.floor(Math.random() * Math.floor(max - min) + min));
// };


// const minMaxNumber = (array) => {

//   let inOrder = orderOfNumbers(array);
//   let min = inOrder.length - inOrder.length;
//   let max = inOrder.length - 1;

//   return getRandomInt(array[max], array[min]);
// };


// const selectFromArray = (array) => {
//   let max = array.length;
//   let element = getRandomInt(max);

//   return array[element];
// };

// // const countOfAds = 8;
// const avatarImg = [1, 8];
// const titleText = [`Природные парки, заповедники`, `Долина Гейзеров, Камчатка`, `Воробьевы горы`, `Патриаршие пруды`, `Чистые пруды`, `Парк «Коломенское»`, `Нескучный сад`];
// const price = [100000, 5000];
// const type = [`palace`, `flat`, `house`, `bungalow`];
// const rooms = [5, 1];
// const guests = [10, 1];
// const checkin = [`12:00`, `13:00`, `14:00`];
// const checkout = [`12:00`, `13:00`, `14:00`];
// const features = [`wifi`, `dishwasher`, `parking`, `washer`, `elevator`, `conditioner`];
// const desсriptipon = [`«Остров Мечты» станет крайне привлекательной городской туристической достопримечательностью и встанет в один ряд с Кремлем, Парком Горького и ВДНХ`, `Усадьба Царицыно – единственное место в Москве, которое может похвастаться «Поющим световым фонтаном».`, `Музеон – место творческих людей. Здесь постоянно проводят выставки художников, музыкальные фестивали и видеоперфомансы. Сюда часто приходят за вдохновением и идеями.`];
// const photos = [`http://o0.github.io/assets/images/tokyo/hotel1.jpg`, `http://o0.github.io/assets/images/tokyo/hotel2.jpg`, `http://o0.github.io/assets/images/tokyo/hotel3.jpg`];
// const blockSze = [100, 1000];
// const locX = blockSze;
// const locY = [130, 630];


// const getAdsObject = () => {
//   return {
//     author: {
//       avatar: `img/avatars/user0` + minMaxNumber(avatarImg) + `.png`
//     },
//     offer: {
//       title: selectFromArray(titleText),
//       address: getRandomInt(locX) + `,` + minMaxNumber(locY),
//       price: minMaxNumber(price),
//       type: selectFromArray(type),
//       rooms: minMaxNumber(rooms),
//       guests: minMaxNumber(guests),
//       checkin: selectFromArray(checkin),
//       checkout: selectFromArray(checkout),
//       features: features.sort(() => Math.random() - 0.5).slice(0, getRandomInt(features.length)),
//       description: selectFromArray(desсriptipon),
//       photos: photos.sort(() => Math.random() - 0.5).slice(0, getRandomInt(photos.length))
//     },
//     location: {
//       x: minMaxNumber(locX),
//       y: minMaxNumber(locY)
//     }
//   };
// };


// const getlistAds = (countAds) => {
//   let arrayAds = [];
//   for (let i = 0; i < countAds; i++) {
//     arrayAds.push(getAdsObject());
//   }
//   return arrayAds;
// };


// const newAdsList = getlistAds(countOfAds);


// const renderOfPins = (arrayAds) => {
//   const mapPins = document.querySelector(`.map__pins`);
//   const fragment = document.createDocumentFragment();
//   const mapPinTamplate = document.querySelector(`#pin`).content;

//   for (let i = 0; i < arrayAds.length; i++) {

//     const mapPinItem = mapPinTamplate.querySelector(`.map__pin`).cloneNode(true);
//     const pinIcon = mapPinItem.querySelector(`img`);

//     pinIcon.src = arrayAds[i].author.avatar;
//     pinIcon.alt = arrayAds[i].offer.title;

//     mapPinItem.style.left = arrayAds[i].location.x + (pinIcon.width / 2) + `px`;
//     mapPinItem.style.top = arrayAds[i].location.y + pinIcon.height + `px`;


//     arrayAds[i].offer.address = arrayAds[i].location.x + `, ` + arrayAds[0].location.y;

//     fragment.appendChild(mapPinItem);

//   }

//   mapPins.appendChild(fragment);

// };

// renderOfPins(newAdsList);


// const map = document.querySelector(`.map`);
// const mapFilterContainer = document.querySelector(`.map__filters-container`);

// const cardTemplate = document.querySelector(`#card`).content;


// const renderOfAds = (adsList) => {

//   const translateType = {
//     palace: `Дворец`,
//     flat: `Квартира`,
//     house: `Дом`,
//     bungalow: `Бунгало`
//   };

//   for (let element of adsList) {

//     const mapCard = cardTemplate.querySelector(`.map__card`).cloneNode(true);


//     const popupTitle = mapCard.querySelector(`.popup__title`);
//     const textAdress = mapCard.querySelector(`.popup__text--address`);
//     const popupType = mapCard.querySelector(`.popup__type`);
//     const popupPrice = mapCard.querySelector(`.popup__text--price`);
//     const popupCapacity = mapCard.querySelector(`.popup__text--capacity`);
//     const popupTime = mapCard.querySelector(`.popup__text--time`);
//     const popupDescrElement = mapCard.querySelector(`.popup__description`);
//     const popupPhotos = mapCard.querySelector(`.popup__photos`);
//     const popupAvatar = mapCard.querySelector(`.popup__avatar`);

//     if (!element.offer.title) {
//       popupTitle.remove();
//     } else {
//       popupTitle.textContent = element.offer.title;
//     }


//     if (!element.offer.address) {
//       textAdress.remove();
//     } else {
//       textAdress.textContent = element.offer.address;
//     }


//     if (!element.offer.type) {
//       popupType.remove();
//     } else {
//       popupType.textContent = translateType[element.offer.type];
//     }


//     if (!element.offer.price) {
//       popupPrice.remove();
//     } else {
//       popupPrice.textContent = element.offer.price + `₽/ночь`;
//     }


//     if (!element.offer.features) {
//       mapCard.querySelector(`.popup__features`).remove();
//     } else {

//       mapCard.querySelector(`.popup__features`).innerHTML = ``;

//       element.offer.features.forEach((feature) => {
//         const featureTemplate = `<li class="popup__feature popup__feature--${feature}"></li>`;
//         mapCard.querySelector(`.popup__features`).innerHTML += featureTemplate;
//       });

//     }


//     if (!element.offer.rooms && !element.offer.guests) {
//       popupCapacity.remove();
//     } else {
//       popupCapacity.textContent = element.offer.rooms + ` комнаты для ` + element.offer.guests + ` гостей.`;
//     }


//     if (!element.offer.checkin && !element.offer.checkout) {
//       popupTime.remove();
//     } else {
//       popupTime.textContent = `Заезд после ` + element.offer.checkin + `, выезд до ` + element.offer.checkout;
//     }


//     if (!element.offer.description) {
//       popupDescrElement.remove();
//     } else {
//       popupDescrElement.textContent = element.offer.description;
//     }

//     if (!element.offer.photos) {
//       popupPhotos.remove();
//     } else {

//       popupPhotos.innerHTML = ``;

//       element.offer.photos.forEach((photo) => {

//         const photoTemplate = `<img src="${photo}" class="popup__photo" width="45" height="40" alt="Фотография жилья">`;
//         popupPhotos.innerHTML += photoTemplate;

//       });
//     }


//     if (!element.author.avatar) {
//       popupAvatar.remove();
//     } else {
//       popupAvatar.src = element.author.avatar;
//     }


//     map.insertBefore(mapCard, mapFilterContainer);

//   }
// };

// renderOfAds(newAdsList);
