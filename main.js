/////////////////////////////////////////////////////////////////////
/* Chat btn */
/////////////////////////////////////////////////////////////////////
const btnMenu = document.querySelector('.header__btn--menu');
const navMenu = document.querySelector('.header__menu');
const navOverlay = document.querySelector('.header__overlay');
const navList = document.querySelector('.header__list');
const btnChat = document.querySelector('.header__btn--chat');
const header = document.querySelector('.header');


btnMenu.addEventListener('click', () => {
  navMenu.classList.toggle('header__menu--mobile-show');
  navList.classList.toggle('header__list--mobile-show');
  navOverlay.classList.toggle('header__overlay-show');
  btnChat.classList.toggle('header__btn--mobile-chat');
  btnMenu.classList.toggle('header__btn--close');

  if(!navList.contains(btnChat)) {
    navList.appendChild(btnChat);
  } else {
    navList.removeChild(btnChat);
    header.appendChild(btnChat);
  }
});


/////////////////////////////////////////////////////////////////////
/* Testimonials cards auto slider */
/////////////////////////////////////////////////////////////////////
const cards = []
cards[0] = document.querySelector('.testimonials__card--card-1');
cards[1] = document.querySelector('.testimonials__card--card-2');
cards[2] = document.querySelector('.testimonials__card--card-3');

let i = 0;
function changeCard() {
  cards[i].style.display = "none";
  if (i < cards.length-1) {
    i++;
    cards[i].style.display = "flex";
  } else {
    i = 0;
    cards[i].style.display = "flex";
  }
  setTimeout("changeCard()", 6000);         
}
window.onload = changeCard;                   


/////////////////////////////////////////////////////////////////////
/* Offer cards gallery */
/////////////////////////////////////////////////////////////////////
const offers = []
offers[0] = document.querySelector('.offer__area--area-bas');
offers[1] = document.querySelector('.offer__area--area-adv');
offers[2] = document.querySelector('.offer__area--area-pro');
const btnLeft = document.querySelector('.offer__arrow--left');
const btnRight = document.querySelector('.offer__arrow--right');

let card_index = 0;

btnRight.addEventListener('click', () => {
  if(card_index < offers.length - 1) {
    card_index += 1
    showArrows()
    showNextCard()
  }
})

btnLeft.addEventListener('click', () => {
  if(card_index > 0) {
    card_index -= 1
    showArrows()
    showPrevCard()
  }
})

function showArrows() {
  if(card_index == 0) {
    btnLeft.style.visibility = 'hidden'
  } else {
    btnLeft.style.visibility = 'visible'
  }

  if(card_index < offers.length - 1) {
    btnRight.style.visibility = 'visible'
  } else {
    btnRight.style.visibility = 'hidden'
  }
}

function showNextCard() {
  if(card_index < offers.length) {
    offers[card_index - 1].style.display = 'none'
    offers[card_index].style.display = 'flex'
  } 
}

function showPrevCard() {
  if(card_index >= 0 ) {
    offers[card_index + 1].style.display = 'none'
    offers[card_index].style.display = 'flex'
  } 
}

showArrows()





    





