import config from '../config';

export class CharactersService {
  static getMainCharacters() {
    return fetch(`${config.API_URL}/character/1,2,3`);
  }

  static getCharacters(page) {
    return fetch(`${config.API_URL}/character/?page=${page}`);
  };

  static getCharacterById(id) {
    return fetch(`${config.API_URL}/character/${id}`);
  };
}
