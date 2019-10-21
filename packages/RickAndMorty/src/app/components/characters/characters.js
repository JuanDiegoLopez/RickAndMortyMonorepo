import { HandleError, elements } from 'src/utils';
import CharactersService from 'services/characters';
import router from 'src/router';

import template from './characters.pug';
import style from './characters.scss';

class CharactersComponent {
  constructor(page) {
    this.page = page;
    this.paginationStart = 1;
    this.paginationEnd = 10;
    this.router = router;
  }

  async createComponent() {
    try {
      const response = await CharactersService.getAllCharacters(this.page);
      const data = await response.json();

      this.render(data, this.page);
      this.setupListeners();
    } catch (error) {
      HandleError(error);
    }
  }

  checkPagination(currentPage, totalPages) {
    if (currentPage > this.paginationEnd && currentPage <= totalPages) {
      this.paginationStart = currentPage - 9;
      this.paginationEnd = currentPage;
    }

    if (currentPage < this.paginationStart) {
      this.paginationStart = currentPage;
      this.paginationEnd = currentPage + 9;
    }
  }

  render(data, currentPage) {
    const currentPageParsed = parseInt(currentPage, 10);
    this.checkPagination(currentPage, data.info.pages);

    const vars = {
      characters: data.results,
      pagination: {
        current: currentPageParsed,
        total: data.info.pages,
        start: this.paginationStart,
        end: this.paginationEnd,
      },
    };

    elements.content.innerHTML = template(vars);
    elements.content.style.cssText = style;
  }

  setupListeners() {
    const linksElements = Array.from(elements.content.getElementsByTagName('a'));
    const charactersElements = Array.from(elements.content.getElementsByClassName('character'));

    linksElements.forEach((link) => {
      link.addEventListener('click', (event) => {
        event.preventDefault();
        this.router.navigate(link.getAttribute('href'));
      });
    });

    charactersElements.forEach((character) => {
      character.addEventListener('click', () => {
        this.router.navigate(`/details/${character.id}`);
      });
    });
  }
}

export default CharactersComponent;
