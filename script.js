const closeIcon = document.querySelector('.close-icon');
const hamburgerMenu = document.querySelector('.hamburger-menu-container');
const headerContent = document.querySelector('.header-content');
hamburgerMenu.addEventListener('click',()=>{
   headerContent.classList.add('menu-open');
})
closeIcon.addEventListener('click',()=>{
  headerContent.classList.remove('menu-open');
})

(function() {
  emailjs.init("vJPwKBaNTkMqDJTW_"); // Replace with your EmailJS user_id
})();

