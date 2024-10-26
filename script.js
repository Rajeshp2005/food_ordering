const closeIcon = document.querySelector('.close-icon');
const hamburgerMenu = document.querySelector('.hamburger-menu-container');
const headerContent = document.querySelector('.header-content');
hamburgerMenu.addEventListener('click',(e)=>{
  e.stopPropagation()
   headerContent.classList.add('menu-open');
})
closeIcon.addEventListener('click',()=>{
  headerContent.classList.remove('menu-open');
})
window.addEventListener('click',()=>{
  headerContent.classList.remove('menu-open');
})


