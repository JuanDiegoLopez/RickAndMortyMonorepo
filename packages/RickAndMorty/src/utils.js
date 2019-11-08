export const HandleError = (error) => {
  console.error(error);
};

export const getElements = () => ({
  app: document.querySelector('#app'),
  navbar: document.querySelector('.nav-wrapper'),
  content: document.querySelector('.container'),
  footer: document.querySelector('.page-footer'),
});
