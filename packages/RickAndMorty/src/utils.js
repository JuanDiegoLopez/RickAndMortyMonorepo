const HandleError = (error) => {
  console.error(error);
};

const elements = {
  app: document.getElementById('app'),
  content: document.getElementById('content'),
  navbar: document.getElementById('navbar'),
  footer: document.getElementById('footer'),
};

export {
  HandleError,
  elements,
};
