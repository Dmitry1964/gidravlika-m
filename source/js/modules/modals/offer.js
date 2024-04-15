const offerInfoList = document.querySelector('.offer__info-list');
const offerButtonsList = document.querySelector('.offer__buttons');
const offerInfoElements = offerInfoList.querySelectorAll('.offer__info-item');
const offerButtonElements = offerButtonsList.querySelectorAll('.offer__button');

const SCREEN_SIZE = 768;
const viewPort = window.screen.width;

const changeInfoElement = (indexBtn) => {
  if (offerInfoElements.length > 0) {
    offerInfoElements.forEach((item) => {
      item.classList.remove('offer__info-item--current');
    });
    offerInfoElements.forEach((item, index) => {
      if (index === indexBtn) {
        item.classList.add('offer__info-item--current');
      }
    });
  }
};

const onOfferButtonClick = (evt, index) => {
  const buttonEl = evt.target.closest('.offer__button');
  if (offerButtonElements.length > 0) {
    offerButtonElements.forEach((item) => {
      item.classList.remove('offer__button--current');
    });
    buttonEl.classList.add('offer__button--current');
    changeInfoElement(index);
  }
};

const initOffer = () => {
  if (offerInfoElements.length > 0 && viewPort > SCREEN_SIZE) {
    offerInfoElements[0].classList.add('offer__info-item--current');
    offerButtonElements[0].classList.add('offer__button--current');
  }

  offerButtonElements.forEach((item, index) => {
    item.addEventListener('click', (evt) => onOfferButtonClick(evt, index));
  })
};


export {initOffer};
