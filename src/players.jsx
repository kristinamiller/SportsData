import React from 'react';
import { players } from './api';
// import TableFilter from 'react-table-filter';


export const tableHeaders = [
  'Player ID',
  'Game ID',
  'Name',
  'Team',
  'Opp',
  'Team Name',
  'Opp Name',
  'Points',
  'Assists',
  'Rebounds',
  'Starter',
  'Active'
]

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

  getPlayerKeys() {
    const playerKeys = Object.keys(this.state.players[1])
    return playerKeys;
  }


  render() {
    return (
      <div className="players-table">
        <table className="basic-table">
          <thead>
            <tr key={'header'}>
              {tableHeaders.map((header, idx) => {
                return (
                    <th key={"header_" + idx} className="cell">
                      {header}
                    </th>
                );
              })}
            </tr>
          </thead>
          <tbody>
            {this.state.players.map((player, idx) => {
              return (
                <tr key={"player_" + idx}>
                  {this.getPlayerKeys().map((item, idx) => {
                    return (
                      <td key={"item" + idx} className="cell">
                        {player[item]}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }

}

export default Players;