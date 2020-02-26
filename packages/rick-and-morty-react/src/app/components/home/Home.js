import React from 'react';

import CharactersService from '../../../services/characters';

export class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      characters: []
    };
  }

  componentDidMount() {
    CharactersService.getMainCharacters()
      .then(response => response.json())
      .then(data => this.setState({ characters: data }));
  }

  getThumbnails() {
    return this.state.characters.map(character => {
      return (
        <div className="col s12 m4" key={character.id}>
          <character-thumbnail data-name={character.name} data-image={character.image}/>
        </div>
      );
    });
  }

  render() {
    return (
      <div className="row">{this.getThumbnails()}</div>
    );
  }
}
