import { elements, HandleError } from 'src/utils';
import CharactersService from 'services/characters';
import router from 'src/router';

import template from './home.pug';
import './home.scss';

class HomeComponent {
  constructor() {
    this.characters = [];
    this.router = router;
  }

  async createComponent() {
    try {
      const response = await CharactersService.getMainCharacters();
      const data = await response.json();

      this.characters = data;
      this.render();
    } catch (error) {
      HandleError(error);
    }
  }

  render() {
    elements.content.innerHTML = template({ characters: this.characters });
    const button = elements.content.querySelector('.btn');

    button.addEventListener('click', () => {
      this.router.navigate('/characters/1');
    });
  }
}

export default HomeComponent;
