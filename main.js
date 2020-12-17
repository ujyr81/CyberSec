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

