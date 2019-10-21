import 'scss/style.scss';
import 'scss/grid.scss';
import Logo from 'assets/logo.png';

import { elements } from 'src/utils';
import router from 'src/router';

import CharactersComponent from './components/characters/characters';
import DetailsComponent from './components/details/details';
import HomeComponent from './components/home/home';

class AppComponent {
  constructor() {
    this.router = router;
  }

  createComponent() {
    const navbarItems = Array.from(elements.navbar.getElementsByTagName('a'));

    navbarItems.forEach((element) => {
      element.addEventListener('click', (event) => {
        event.preventDefault();
        this.router.navigate(element.getAttribute('href'));
      });
    });

    const logoImage = new Image();
    logoImage.src = Logo;

    const [logoElement] = document.getElementsByClassName('brand-logo');
    logoElement.appendChild(logoImage);

    this.setupRouter();
  }

  setupRouter() {
    this.router.config({ mode: 'history' });

    this.router.add(/home/, HomeComponent);
    this.router.add(/characters\/(.*)/, CharactersComponent);
    this.router.add(/details\/(.*)/, DetailsComponent);
    this.router.listen();

    this.router.navigate('/home');
  }
}

export default AppComponent;
