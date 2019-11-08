import { getElements, HandleError } from 'src/utils';
import CharactersService from 'services/characters';

import template from './details.pug';
import './details.scss';

class DetailsComponent {
  constructor(id) {
    this.id = id;
    this.charactersService = CharactersService;
  }

  async createComponent() {
    try {
      const response = await this.charactersService.getCharacterById(this.id);
      const data = await response.json();

      getElements().content.innerHTML = template({ character: data });
    } catch (error) {
      HandleError(error);
    }
  }
}

export default DetailsComponent;
