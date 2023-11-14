const menuButton = document.querySelector('.breadcrumbs__btn');
const asideMenu = document.querySelector('.aside-menu');
const asideMenuList = document.querySelector('.aside-menu__list');

const handleMenuButtonClick = () => {
  asideMenu.classList.add('aside-menu--mobile');
};

const closeAsideMenu = () => {
  asideMenu.classList.remove('aside-menu--mobile');
};

menuButton.addEventListener('click', handleMenuButtonClick);
asideMenu.addEventListener('click', closeAsideMenu);
asideMenuList.addEventListener('click', (evt) => evt.stopPropagation());
