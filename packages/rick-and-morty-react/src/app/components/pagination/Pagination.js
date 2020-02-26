import React from 'react';
import { Link } from 'react-router-dom';

import './Pagination.css';

export class Pagination extends React.Component {
  constructor(props) {
    super();
    const totalPages = parseInt(props.totalPages);
    const currentPage = parseInt(props.currentPage);
    const numberItems = parseInt(props.numberItems);
    const bounds = this.getBounds(currentPage, numberItems);

    this.state = {
      totalPages: totalPages,
      currentPage: currentPage,
      numberItems: numberItems,
      start: bounds.start,
      end: bounds.end
    };
  }

  getBounds(currentPage, numberItems) {
    const bounds = {};

    if (currentPage > numberItems) {
      bounds.start = currentPage - 9;
      bounds.end = currentPage;
    } else {
      bounds.start = 1;
      bounds.end = 10;
    }

    return bounds;
  }

  componentDidUpdate(prevProps) {
    if (this.props.currentPage !== prevProps.currentPage) {
      this.setState((state, props) => {
        const newState = {
          currentPage: parseInt(props.currentPage)
        };

        if (props.currentPage > state.end) {
          newState.start = state.start + 1; 
          newState.end = state.end + 1;
        }

        if (props.currentPage < state.start) {
          newState.start = state.start - 1; 
          newState.end = state.end - 1;
        }

        return newState;
      });
    }
  }

  getItems() {
    let items = [];
  
    for(let i = this.state.start; i <= this.state.end; i++) {
      const activeClass = i === this.state.currentPage ? 'active' : '';

      items.push(
        <li className={`waves-effect ${activeClass}`} key={i}>
          <Link to={`/characters/${i}`}>{i}</Link>
        </li>
      );
    }

    return items;
  }

  render() {
    const disabledPrevClass = this.state.currentPage === 1 ? 'disabled' : '';
    const disabledNextClass = this.state.currentPage === this.state.totalPages ? 'disabled' : '';

    return (
      <ul className="pagination">
        <li className={`waves-effect ${disabledPrevClass}`}>
          <Link to={`/characters/${this.state.currentPage - 1}`}>
            <i className="material-icons">chevron_left</i>
          </Link>
        </li>
        { this.getItems() }
        <li className={`waves-effect ${disabledNextClass}`}>
          <Link to={`/characters/${this.state.currentPage + 1}`}>
            <i className="material-icons">chevron_right</i>
          </Link>
        </li>
      </ul>
    );
  }
}
