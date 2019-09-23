import { MainWrapper } from '../../index';
import { CharactersService } from '../../services/characters';
import { HandleError } from '../../utils'
import template from './details.pug';
import './details.scss';

export async function DetailsComponent(id) {
  try {
    const response = await CharactersService.getCharacterById(id);
    const data = await response.json();

    createComponent(data);
  } catch (error) {
    HandleError(error);
  }
}

const createComponent = character => {
  MainWrapper.innerHTML = template({character});
}
