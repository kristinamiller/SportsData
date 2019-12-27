import React from 'react';
import { players } from './api';

class Players extends React.Component {

  constructor(props) {
    super(props) 
    this.state = {
      players: []
    };
  }

  componentDidMount() {
    const getPlayers = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(players)
      }, 1000)
    })
    
    getPlayers.then((playerInfo) => {
      this.setState({players: playerInfo})
    })
  }

  render() {
    return (
      <div className="players-table">
        <ul className="players-ul">
          This is the Players Table
          {this.state.players.map(player => {
            return (
              <li key={player.player_id}>
                <ul className="player-row">
                  {Object.values(player).map((value, idx) => {
                    return <li key={idx} className="player-item">{value}</li>;
                  })}
                </ul>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }

}

export default Players;