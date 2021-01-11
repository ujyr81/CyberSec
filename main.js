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


const btnLeft = document.querySelector('.offer__arrow--left');
const btnRight = document.querySelector('.offer__arrow--right');

// offers[card_index].style.display = 'none'
// offers[card_index+1].style.display = 'flex'

let card_index = 0;

btnRight.addEventListener('click', () => {
  card_index += 1
  console.log(card_index)
})

btnLeft.addEventListener('click', () => {
  card_index -= 1
  console.log(card_index)
})


    





