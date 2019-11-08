import LoadMockLayout from 'src/mocks/layout';
import AppComponent from './app';

describe('AppComponent', () => {
  let component;

  beforeEach(() => {
    LoadMockLayout();
  });

  beforeEach(() => {
    component = new AppComponent();
    component.createComponent();
  });

  test('should create', () => {
    expect(component).toBeTruthy();
  });

  test('should navigate', () => {
    const navbar = document.querySelector('.nav-wrapper');
    const testItem = navbar.getElementsByTagName('a')[0];
    const testEvent = new MouseEvent('click');
    const spy = jest.spyOn(component.router, 'navigate');

    testItem.dispatchEvent(testEvent);
    expect(spy).toHaveBeenCalled();
  });
});
