import Config from '../config';

const CharactersService = {
  getMainCharacters: () => fetch(`${Config.API_URL}/character/1,2,3`),
  getAllCharacters: (page) => fetch(`${Config.API_URL}/character/?page=${page}`),
  getCharacterById: (id) => fetch(`${Config.API_URL}/character/${id}`),
};

export default CharactersService;
