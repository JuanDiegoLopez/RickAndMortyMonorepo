import { router } from '../../index';
import MainTemplate from './main.pug';
import Logo from '../../assets/logo.png';

export function setupLayout() {
  document.getElementById('app').innerHTML = MainTemplate();
  
  const navbar = document.getElementById('nav-mobile');
  const items = navbar.getElementsByTagName('a');

  for (let item of items) {
    item.addEventListener('click', (event) => {
      event.preventDefault();
      router.navigate(item.getAttribute('href'));
    })
  }

  const logoImage = new Image();
  logoImage.src = Logo;

  const logoElement = document.getElementsByClassName('brand-logo')[0];
  logoElement.appendChild(logoImage);
};
