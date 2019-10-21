class Router {
  constructor() {
    this.routes = [];
    this.mode = null;
    this.root = '/';
  }

  config(options) {
    this.mode = options && options.mode && options.mode === 'history' && !!(history.pushState) ? 'history' : 'hash';
    this.root = options && options.root ? `/${this.clearSlashes(options.root)}/` : '/';
  }

  getFragment() {
    let fragment = '';

    if (this.mode === 'history') {
      fragment = this.clearSlashes(decodeURI(location.pathname));
      fragment = fragment.replace(/\?(.*)$/, '');
      fragment = this.root !== '/' ? fragment.replace(this.root, '') : fragment;
    } else {
      const match = window.location.href.match(/·(.*)$/);
      fragment = match ? match[1] : '';
    }

    return this.clearSlashes(fragment);
  }

  clearSlashes(path) {
    return path.toString().replace(/\/$/, '').replace(/^\//, '');
  }

  add(re, handler) {
    if (typeof re === 'function') {
      handler = re;
      re = '';
    }

    this.routes.push({ re, handler });
  }

  remove(param) {
    this.routes.forEach((route) => {
      if (route.handler === param || route.re.toString() === param.toString()) {
        const index = this.routes.indexOf(route);
        this.routes.splice(index, 1);
      }
    });
  }

  flush() {
    this.routes = [];
    this.mode = null;
    this.root = '/';
  }

  check(f) {
    const fragment = f || this.getFragment();

    this.routes.forEach((route) => {
      const match = fragment.match(route.re);

      if (match) {
        match.shift();
        const handlerInstance = new route.handler(match);
        handlerInstance.createComponent();
      }
    });
  }

  listen() {
    const self = this;
    let current = self.getFragment();

    const fn = () => {
      if (current !== self.getFragment()) {
        current = self.getFragment();
        self.check(current);
      }
    };

    clearInterval(this.interval);
    this.interval = setInterval(fn, 50);
  }

  navigate(path) {
    path = path ? path : '';

    if (this.mode === 'history') {
      history.pushState(null, null, `${this.root}${this.clearSlashes(path)}`);
    }  else {
      window.location.href = `${window.location.href.replace(/#(.*)$/, '')}#${path}`;
    }
  }
}

export default Router;
