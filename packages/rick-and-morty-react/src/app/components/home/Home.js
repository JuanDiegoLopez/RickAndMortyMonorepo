import React from 'react';

import CharactersService from '../../../services/characters';

class Home extends React.Component {
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
        <div className="col s4" key={character.id}>
          <character-thumbnail name={character.name} image={character.image}/>
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

export default Home;
