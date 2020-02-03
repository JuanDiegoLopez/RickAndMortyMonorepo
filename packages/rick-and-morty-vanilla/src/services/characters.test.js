import CharactersService from './characters';

describe('CharacterService', () => {
  beforeEach(() => {
    window.fetch = jest.fn();
  });

  test('should get main characters', () => {
    const spy = jest.spyOn(window, 'fetch');

    CharactersService.getMainCharacters();
    expect(spy).toHaveBeenCalled();
  });

  test('should get all characters', () => {
    const spy = jest.spyOn(window, 'fetch');

    CharactersService.getAllCharacters(1);
    expect(spy).toHaveBeenCalled();
  });

  test('should get a character by id', () => {
    const spy = jest.spyOn(window, 'fetch');

    CharactersService.getCharacterById(1);
    expect(spy).toHaveBeenCalled();
  });
});
