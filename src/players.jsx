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
          {this.state.players.map(player => {
            return (
              <li key={player.player_id} className="player-row">
                <ul className="player-row">
                  <li key="1" className="player-item number">
                    {player.player_id}
                  </li>
                  <li key="2" className="player-item number">
                    {player.game_id}
                  </li>
                  <li key="3" className="player-item name">
                    {player.name}
                  </li>
                  <li key="4" className="player-item ">
                    {player.team_abbr}
                  </li>
                  <li key="5" className="player-item name">
                    {player.team_name}
                  </li>
                  <li key="6" className="player-item ">
                    {player.opp_abbr}
                  </li>
                  <li key="7" className="player-item name">
                    {player.opp_name}
                  </li>
                  <li key="8" className="player-item points">
                    {player.points}
                  </li>
                  <li key="9" className="player-item assists">
                    {player.assists}
                  </li>
                  <li key="10" className="player-item rebounds">
                    {player.rebounds}
                  </li>
                  <li key="11" className="player-item number">
                    {player.starter}
                  </li>
                  <li key="12" className="player-item number">
                    {player.active}
                  </li>
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