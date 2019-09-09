import { MainWrapper } from '../index';
import { CharactersService } from '../services/characters';
import { HandleError } from '../utils'

export async function DetailsComponent(id) {
  try {
    const response = await CharactersService.getCharacterById(id);
    const data = await response.json();

    createComponent(data);
  } catch (error) {
    HandleError(error);
  }
}

const createComponent = data => {
  const html = `
    <h2>${data.name}</h2>
    <div class="row">
      <div class="col s12 m6">
        <img src="${data.image}"> 
      </div>
      <div class="col s12 m6">
        <h3>Character Data</h3>
        <div class="collection">
          <li class="collection-item"><b>Status:</b> ${data.status}</li>
          <li class="collection-item"><b>Species:</b> ${data.species}</li>
          <li class="collection-item"><b>Gender:</b> ${data.gender}</li>
          <li class="collection-item"><b>Origin:</b> ${data.origin.name}</li>
        </div>
      </div>
    </div>
  `

  MainWrapper.innerHTML = html;
}
