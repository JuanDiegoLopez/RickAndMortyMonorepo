import { CharactersService } from '../services/characters'
import { HandleError } from '../utils';
import { MainWrapper, router} from '../index';

export async function HomeComponent() {
  try {
    const response = await CharactersService.getMainCharacters();
    const data = await response.json();

    createComponent(data);
  } catch (error) {
    HandleError(error);
  }
}

const createComponent = data => {
  const html = `
    <div class="row">${getThumbnails(data)}</div>
    <button class="waves-effect waves-light btn right">Ver todos</button>
    `;

  MainWrapper.innerHTML = html;

  const button = MainWrapper.querySelector('.btn');
  button.addEventListener('click', () => {
    router.navigate('/characters');
  });
}

const getThumbnails = (characters) => {
  let result = ''
  characters.forEach(character => {
    result += `
      <div class="col s12 m4">
        <div class="card">
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
