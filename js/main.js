// Select DOM Items
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-nav');
const menuBrand = document.querySelector('.menu-branding');
const navItem = document.querySelectorAll('.nav-item');

// Set Initial State of Menu
let showMenu = false;
menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
  if (!showMenu) {
    menuBtn.classList.add('close');
    menu.classList.add('show');
    menuNav.classList.add('show');
    menuBrand.classList.add('show');
    navItem.forEach(item => item.classList.add('show'));
    showMenu = true;
    document.getElementById('home').style.opacity = '0';
  } else {
    menuBtn.classList.remove('close');
    menu.classList.remove('show');
    menuNav.classList.remove('show');
    menuBrand.classList.remove('show');
    navItem.forEach(item => item.classList.remove('show'));
    showMenu = false;
    document.getElementById('home').style.opacity = '1';
  }
}

// Conditions for Mobile scrollTop button
window.onscroll = function() {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 900 ||
    document.documentElement.scrollTop > 900
  ) {
    document.getElementById('myBtn').style.opacity = '1';
  } else {
    document.getElementById('myBtn').style.opacity = '0';
  }
}

// When the user clocks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; //safari
  document.documentElement.scrollTop = 0; // chrome, firefox, IE, opera
}
