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
    navList.appendChild(btnChat)
  } else {
    navList.removeChild(btnChat)
    header.appendChild(btnChat)
  }
});