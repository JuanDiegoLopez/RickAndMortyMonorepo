import LoadMockLayout from 'src/mocks/layout';
import MainCharactersMock from 'src/mocks/main-characters';
import HomeComponent from './home';

describe('HomeComponent', () => {
  let component;

  beforeEach(() => {
    LoadMockLayout();
  });

  beforeEach(() => {
    component = new HomeComponent();
    component.charactersService
      .getMainCharacters = jest.fn(() => ({ json: () => MainCharactersMock }));
    component.createComponent();
  });

  test('should create', () => {
    expect(component).toBeTruthy();
  });

  test('should navigate', () => {
    const content = document.getElementById('content');
    const testButton = content.querySelector('.btn');
    const testEvent = new MouseEvent('click');
    const spy = jest.spyOn(component.router, 'navigate');

    testButton.dispatchEvent(testEvent);
    expect(spy).toHaveBeenCalled();
  });
});
