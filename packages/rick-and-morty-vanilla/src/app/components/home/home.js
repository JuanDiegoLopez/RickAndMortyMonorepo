import { getElements, HandleError } from 'src/utils';
import CharactersService from 'services/characters';
import router from 'src/router';

import template from './home.pug';
import './home.scss';

class HomeComponent {
  constructor() {
    this.characters = [];
    this.router = router;
    this.charactersService = CharactersService;
  }

  async createComponent() {
    try {
      const response = await this.charactersService.getMainCharacters();
      const data = await response.json();

      this.characters = data;
      this.render();
    } catch (error) {
      HandleError(error);
    }
  }

  render() {
    getElements().content.innerHTML = template({ characters: this.characters });
    const button = getElements().content.querySelector('.btn');

    button.addEventListener('click', () => {
      this.router.navigate('/characters/1');
    });
  }
}

export default HomeComponent;
