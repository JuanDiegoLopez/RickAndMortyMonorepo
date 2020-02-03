import CharactersMock from 'src/mocks/characters';
import LoadMockLayout from 'src/mocks/layout';
import CharactersComponent from './characters';

describe('CharactersComponent', () => {
  let component;
  let content;

  beforeEach(() => {
    LoadMockLayout();
    content = document.getElementById('content');
  });

  beforeEach(() => {
    component = new CharactersComponent();
    component.charactersService.getAllCharacters = jest.fn(() => ({ json: () => CharactersMock }));
    component.createComponent();
  });

  test('should create', () => {
    expect(component).toBeTruthy();
  });

  test('should back forward pagination', () => {
    const testCurrentPage = 11;
    const testTotalPages = 20;

    component.checkPagination(testCurrentPage, testTotalPages);
    expect(component.paginationStart).toBe(testCurrentPage - 9);
    expect(component.paginationEnd).toBe(testCurrentPage);
  });

  test('should move forward pagination', () => {
    const testCurrentPage = 9;
    const testTotalPages = 20;

    component.paginationStart = 10;
    component.checkPagination(testCurrentPage, testTotalPages);
    expect(component.paginationStart).toBe(testCurrentPage);
    expect(component.paginationEnd).toBe(testCurrentPage + 9);
  });

  test('should navigate on link element click', () => {
    const spy = jest.spyOn(component.router, 'navigate');
    const testLinkElement = content.getElementsByTagName('a')[0];
    const testEvent = new MouseEvent('click');

    testLinkElement.dispatchEvent(testEvent);
    expect(spy).toHaveBeenCalled();
  });

  test('should navigate on character element click', () => {
    const spy = jest.spyOn(component.router, 'navigate');
    const testCharacterElement = content.getElementsByClassName('character')[0];
    const testEvent = new MouseEvent('click');

    testCharacterElement.dispatchEvent(testEvent);
    expect(spy).toHaveBeenCalled();
  });
});
