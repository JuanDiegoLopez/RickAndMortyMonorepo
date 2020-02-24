import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'materialize-css/dist/css/materialize.min.css';
import 'character-thumbnail/dist';

import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Home from './components/home/Home';

import './App.css';

class App extends React.Component {  
  render() {
    return (
      <Router>
        <div className="App">
          <Header/>

          <div className="container content">
            <Switch>
              <Route path="/">
                <Home/>
              </Route>
            </Switch>
          </div>

          <Footer/>
        </div>
      </Router>
    );
  }
}

export default App;
