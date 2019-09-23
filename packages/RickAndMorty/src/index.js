import './scss/style.scss';
import './scss/grid.scss';

import { Router } from './lib/router';
import { HomeComponent } from './components/home/home';
import { CharactersComponent } from './components/characters/characters';
import { DetailsComponent } from './components/details/details';
import { setupLayout } from './components/layout';

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

setupLayout();

export const MainWrapper = document.querySelector('.content');
export const router = configureRouter();
