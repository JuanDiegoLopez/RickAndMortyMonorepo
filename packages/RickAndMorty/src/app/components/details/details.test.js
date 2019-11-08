import LoadMockLayout from 'src/mocks/layout';
import CharacterMock from 'src/mocks/character';
import DetailsComponent from './details';

describe('DetailsComponent', () => {
  let component;

  beforeEach(() => {
    LoadMockLayout();
  });

  beforeEach(() => {
    component = new DetailsComponent(0);
    component.charactersService.getCharacterById = jest.fn(() => ({ json: () => CharacterMock }));
    component.createComponent();
  });

  test('should create', () => {
    expect(component).toBeTruthy();
  });
});
