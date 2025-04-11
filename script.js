const menuIcon = document.querySelector('.menu-icon');
const navList = document.querySelector('.nav-list');

menuIcon.addEventListener('click', () => {
  navList.style.display = navList.style.display === 'block' ? 'none' : 'block';
});
