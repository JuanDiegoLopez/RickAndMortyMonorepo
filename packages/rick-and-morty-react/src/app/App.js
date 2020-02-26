import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import 'materialize-css/dist/css/materialize.min.css';
import 'character-thumbnail/dist';

import { Characters } from './components/characters/Characters';
import { Details } from './components/details/Details';
import { Footer } from './components/footer/Footer';
import { Header } from './components/header/Header';
import { Home } from './components/home/Home';

import './App.css';

class App extends React.Component {  
  render() {
    return (
      <Router>
        <div className="App">
          <Header/>

          <div className="container content">
            <Switch>
              <Route path="/characters/:page" component={Characters}/>
              <Route path="/details/:id" component={Details}/>
              <Route path="/" component={Home}/>
            </Switch>
          </div>

          <Footer/>
        </div>
      </Router>
    );
  }
}

export default App;
