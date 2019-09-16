import { CharactersService } from '../../services/characters';
import { HandleError } from '../../utils';
import { MainWrapper, router} from '../../index';
import template from './characters.pug';

let paginationStart = 1;
let paginationEnd = 10;

export async function CharactersComponent(page) {
  try {
    const response = await CharactersService.getAllCharacters(page);
    const data = await response.json();

    createComponent(data, page);
    setupListeners();
  } catch (error) {
    HandleError(error);
  }
};

const createComponent = (data, currentPage) => {
  currentPage = parseInt(currentPage);
  checkPagination(currentPage, data.info.pages);

  const vars = {
    characters: data.results, 
    pagination: {
      current: currentPage,
      total: data.info.pages,
      start: paginationStart,
      end: paginationEnd
    }
  };

  MainWrapper.innerHTML = template(vars);
};

const setupListeners = () => {
  const links = MainWrapper.getElementsByTagName('a');
  const charactersCollection = MainWrapper.getElementsByClassName('character');
  
  for (const link of links) {
    link.addEventListener('click', (event) => {
      event.preventDefault();
      router.navigate(link.getAttribute('href'));
    });
  }

  for (const character of charactersCollection) {
    character.addEventListener('click', () => {
      router.navigate(`/details/${character.id}`);
    });
  }
};

const checkPagination = (currentPage, totalPages) => {
  if (currentPage > paginationEnd && currentPage <= totalPages) {
    paginationStart = currentPage - 9;
    paginationEnd = currentPage;
  }
  
  if (currentPage < paginationStart) {
    paginationStart = currentPage;
    paginationEnd = currentPage + 9;
  }
};