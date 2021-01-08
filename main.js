/////////////////////////////////////////////////////////////////////
/* Chat btn */
/////////////////////////////////////////////////////////////////////
const btnMenu = document.querySelector('.header__btn--menu');
const navMenu = document.querySelector('.header__menu');
const navList = document.querySelector('.header__list');
const btnChat = document.querySelector('.header__btn--chat');
const header = document.querySelector('.header');

btnMenu.addEventListener('click', () => {
  navMenu.classList.toggle('header__menu--mobile');
  navList.classList.toggle('header__list--mobile');
  btnChat.classList.toggle('header__btn--mobile');
  
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
  setTimeout("changeCard()", 5000);         
}
window.onload = changeCard;                   


/////////////////////////////////////////////////////////////////////
/* Offer cards gallery */
/////////////////////////////////////////////////////////////////////
const offers = []
offers[0] = document.querySelector('.offer__area--area-bas');
offers[1] = document.querySelector('.offer__area--area-adv');
offers[2] = document.querySelector('.offer__area--area-pro');


const offersArea = document.querySelector('.offer__offers');
const mediaQuery = window.matchMedia('(max-width: 600px)');

if (mediaQuery.matches) {
  const arrowLeft = document.createElement('BUTTON');
  const arrowRight = document.createElement('BUTTON');

  [arrowLeft, arrowRight].forEach(el => {
    el.style.height = '10rem'
    el.style.width = '10%'
  });

  offersArea.prepend(arrowLeft)
  offersArea.append(arrowRight)

  let card_index = 0;
  console.log(card_index)
  arrowRight.addEventListener('click', () => {
    
    if(card_index < offers.length-1) {
      offers[card_index].style.display = 'none'
      offers[card_index+1].style.display = 'flex'
      arrowRight.style.opacity = '100%'
      card_index++;
      console.log(card_index)
    } else {
      arrowRight.style.opacity = '5%'
    }
    return card_index
  });

  arrowLeft.addEventListener('click', () => {
    console.log(card_index)
    if(card_index == 0) {
      arrowLeft.style.opacity = '5%'
    } else {
      offers[card_index].style.display = 'none'
      offers[card_index-1].style.display = 'flex'
      arrowRight.style.opacity = '100%'
      card_index--;
    }
  });
  
}




