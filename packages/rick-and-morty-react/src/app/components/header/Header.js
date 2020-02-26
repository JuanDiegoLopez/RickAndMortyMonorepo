import React from 'react';
import { NavLink  } from 'react-router-dom';

import logo from '../../../assets/logo.png';
import './Header.css';

export class Header extends React.Component {
  render() {
    return (
        <nav>
            <div className="nav-wrapper grey darken-4" id="navbar">
              <NavLink  to="/" className="brand-logo right">
                <img src={logo} alt="logo"></img>
              </NavLink >
              <ul className="left hide-on-med-and-down" id="nav-mobile">
                  <li>
                    <NavLink to="/" activeClassName="active">Home</NavLink>
                  </li>
                  <li>
                    <NavLink to="/characters/1" activeClassName="active">All Characters</NavLink>
                  </li>
              </ul>
            </div>
        </nav>
    );
  }
}
