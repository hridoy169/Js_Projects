let bgNavbar = document.querySelector('#bg-navbar');
let p = document.querySelector('.para');

window.onscroll = () => {
  let scrollNav = window.scrollY;

  if (scrollNav >= 100) {
    bgNavbar.classList.add('afterScroll');
    p.style.backgroundColor = 'pink';
  } else {
    bgNavbar.classList.remove('afterScroll');
    p.style.backgroundColor = 'white';
  }
};
