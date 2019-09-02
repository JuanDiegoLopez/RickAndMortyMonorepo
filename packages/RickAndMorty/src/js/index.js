import '../scss/style.scss';
import Config from './config';

const init = async () => {
  try {
    const response = await fetch(`${Config.API_URL}/character/1,2,3`);
    const data = await response.json();
    mainComponent(data);
  } catch (error) {
    handleErrors(error);
  }
}

const mainComponent = data => {
  const mainWrapp = document.querySelector('.content');
  const html = `
    <div class="row">${getCharacters(data)}</div>
    <button class="waves-effect waves-light btn right">Ver todos</button>
    `;

  mainWrapp.classList.add('container');
  mainWrapp.innerHTML = html;
}

const getCharacters = (characters) => {
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

const handleErrors = error => {
  console.log(error);
}

init();