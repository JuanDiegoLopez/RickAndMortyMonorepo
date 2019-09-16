import '../scss/style.scss';
import { Router } from './lib/router';
import { HomeComponent } from './components/home/home';
import { CharactersComponent } from './components/characters/characters';
import { DetailsComponent } from './components/details/details';
import MainTemplate from './components/layout/main.pug';

const configureRouter = () => { 
  const router = new Router();

  router.config({
    mode: 'history'
  });

  router.add(/home/, HomeComponent);
  router.add(/characters\/(.*)/, CharactersComponent);
  router.add(/details\/(.*)/, DetailsComponent);
  router.listen();
  router.navigate('/home');

  return router;
}

document.getElementById('app').innerHTML = MainTemplate();

const navbar = document.getElementById('nav-mobile');
const items = navbar.getElementsByTagName('a');

for (let item of items) {
  item.addEventListener('click', (event) => {
    event.preventDefault();
    router.navigate(item.getAttribute('href'));
  })
}

export const MainWrapper = document.querySelector('.content');
MainWrapper.classList.add('container');

export const router = configureRouter();
