import './style.scss';

function component()  {
  const element = document.createElement('div');
  const title = document.createElement('h1');

  title.innerHTML = 'Rick And Morty App by Juan Diego';
  element.appendChild(title);

  return element;
};

document.body.appendChild(component());