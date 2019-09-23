import { CharactersService } from '../../services/characters'
import { HandleError } from '../../utils';
import { MainWrapper, router} from '../../index';
import template from './home.pug';
import './home.scss';

export async function HomeComponent() {
  try {
    const response = await CharactersService.getMainCharacters();
    const data = await response.json();

    createComponent(data);
  } catch (error) {
    HandleError(error);
  }
}

const createComponent = characters => {
  MainWrapper.innerHTML = template({ characters });

  const button = MainWrapper.querySelector('.btn');
  button.addEventListener('click', () => {
    router.navigate('/characters/1');
  });
}
