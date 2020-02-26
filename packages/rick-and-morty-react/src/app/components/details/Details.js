import React from 'react';

import { CharactersService } from '../../../services/characters';

import './Details.css';

export class Details extends React.Component {
  constructor() {
    super();

    this.state = {
      character: {}
    };
  }

  componentDidMount() {
    CharactersService.getCharacterById(this.props.match.params.id)
      .then(response => response.json())
      .then(data => this.setState({ character: data }));
  }

  render() {
    return (
      <div className="column-container">
        <div className="column image-container">
          <h4>{this.state.character.name}</h4>
          <img src={this.state.character.image} alt="Character"></img>
        </div>
        <div className="column data-container">
          <h4>Character Data</h4>
          <div className="collection">
            <div className="collection-item">
              <b>Status: </b>
              <span>{this.state.character.status}</span>
            </div>
            <div className="collection-item">
              <b>Specie: </b>
              <span>{this.state.character.species}</span>
            </div>
            <div className="collection-item">
              <b>Gender: </b>
              <span>{this.state.character.gender}</span>
            </div>
            <div className="collection-item">
              <b>Origin: </b>
              <span>Earth</span>
            </div>
            <div className="collection-item">
              <b>Description: </b>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus nostrum tenetur voluptatum. 
                Beatae magni perspiciatis culpa accusamus placeat voluptatem veniam voluptatibus dolorem! Enim, nulla! 
                Officiis cumque saepe velit officia voluptates!
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
