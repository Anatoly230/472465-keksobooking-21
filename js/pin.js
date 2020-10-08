const mapPins = document.querySelector(`.map__pins`);
const fragment = document.createDocumentFragment();
const mapPinTamplate = document.querySelector(`#pin`).content;


document.querySelector(`.map`).classList.remove(`map--faded`);


const mapPinItem = mapPinTamplate.querySelector(`.map__pin`).cloneNode(true);
const pinIcon = mapPinItem.querySelector('img');

pinIcon.src = newAdsItem[0].author.avatarImg;
pinIcon.alt = newAdsItem[0].offer.titleText;

mapPinItem.left = newAdsItem[0].location.x + (pinIcon.width / 2) + `px`;
mapPinItem.top = newAdsItem[0].location.y +  pinIcon.height + `px`;


newAdsItem[0].offer.address  =  pinIcon.width + `, ` + pinIcon.height ;

fragment.appendChild(mapPinItem);
