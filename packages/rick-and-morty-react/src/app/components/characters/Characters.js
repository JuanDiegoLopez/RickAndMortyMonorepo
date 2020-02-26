import React from 'react';
import { Link } from 'react-router-dom';

import CharacterService from '../../../services/characters';
import { Pagination } from '../pagination/Pagination';

import './Characters.css';

export class Characters extends React.Component {
  constructor(props) {
    super();

    this.state = {
      characters: []
    };
  }

  componentDidMount() {
    this.getCharacters();
  }

  componentDidUpdate(prevProps) {
    if (this.props.match.params.page !== prevProps.match.params.page) {
      this.getCharacters();
    }
  }

  getCharacters() {
    this.setState({ showSpinner: true });
    CharacterService.getCharacters(this.props.match.params.page)
      .then(response => response.json())
      .then(data => this.setState({ characters: data.results }));
  }

  getThumbnails() {
    return this.state.characters.map(character => {
      return (
        <div className="column" key={character.id}>
          <Link to={`/details/${character.id}`}>
            <character-thumbnail data-name={character.name} data-image={character.image}/>
          </Link>
        </div>
      );
    });
  }

  render() {
    return (
      <div class="characters">
        <div className="column-container">{this.getThumbnails()}</div>
        <Pagination className="pagination" totalPages="25" numberItems="10" currentPage={this.props.match.params.page}/>
      </div>
    );
  }
}
