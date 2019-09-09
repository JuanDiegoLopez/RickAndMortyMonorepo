import { CharactersService } from '../services/characters';
import { HandleError } from '../utils';
import { MainWrapper, router} from '../index';

export async function CharactersComponent() {
  try {
    const response = await CharactersService.getAllCharacters();
    const data = await response.json();

    createComponent(data);
  } catch (error) {
    HandleError(error);
  }
}

const createComponent = data => {
  MainWrapper.innerHTML = `<div class="row">${getThumbnails(data.results)}</div>`;

  const charactersCollection = MainWrapper.getElementsByClassName('character');
  const charactersArray = [...charactersCollection];

  charactersArray.forEach(element => {
    element.addEventListener('click', () => {
      router.navigate(`/details/${element.id.split('-')[1]}`);
    });
  });
}

const getThumbnails = (characters) => {
  let result = ''
  characters.forEach(character => {
    result += `
      <div class="col s12 m3 l2">
        <div class="card character hoverable" id="character-${character.id}">
          <div class="card-image">
            <img src="${character.image}">
          </div>
          <div class="card-content">
            <span class="card-title">${character.name}</span>
          </div>
        </div>
      </div>
    `
  });
  
  return result;
}
