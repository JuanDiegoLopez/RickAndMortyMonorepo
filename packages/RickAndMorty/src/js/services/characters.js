import Config from '../config';

export const CharactersService = {
  getMainCharacters: () => {
    return fetch(`${Config.API_URL}/character/1,2,3`);
  },
  getAllCharacters: () => {
    return fetch(`${Config.API_URL}/character`);
  },
  getCharacterById: id => {
    return fetch(`${Config.API_URL}/character/${id}`)
  }
};
