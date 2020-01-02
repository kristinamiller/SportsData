import React from "react";
import { players } from "./api";
import TableFilter from "react-table-filter";
import ReactDataGrid from "react-data-grid";

export const tableHeaders = [
  "Player ID",
  "Game ID",
  "Name",
  "Team",
  "Opp",
  "Team Name",
  "Opp Name",
  "Points",
  "Assists",
  "Rebounds",
  "Starter",
  "Active"
];

const columns = [
  { key: "player_id", name: "Player ID" },
  { key: "game_id", name: "Game ID" },
  { key: "name", name: "Name" },
  { key: "team_abbr", name: "Team" },
  { key: "opp_abbr", name: "Name" },
  { key: "team_name", name: "Team Name" },
  { key: "opp_name", name: "Opp Name" },
  { key: "points", name: "Points", editable: true },
  { key: "assists", name: "Assists", editable: true },
  { key: "rebounds", name: "Rebounds", editable: true },
  { key: "starter", name: "starter", editable: true },
  { key: "active", name: "active", editable: true }
];

class Players extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      players: []
    };
  }

  componentDidMount() {
    const getPlayers = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(players);
      }, 1000);
    });

    getPlayers.then(playerInfo => {
      this.setState({ players: playerInfo });
    });
  }

  getPlayerKeys() {
    const playerKeys = Object.keys(this.state.players[1]);
    return playerKeys;
  }

  render() {
    // const columns = Object.keys(this.state.players[1]).map(columnName => {
    //   return {key: columnName, name: columnName}
    // })
    // const columnNames = columns.map(column => {
    //   return column.key;
    // })
    const rows = this.state.players.map((player, idx) => {
      let row = {};
      columns.forEach((column, idx) => {
        row[column.key] = player[column.key];
      });

      return row;
    });

    const playerData = this.state.players;
    const tableRows = playerData.map((player, idx) => {
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
    });

    return (
      <div className="players-table">
        <ReactDataGrid
          columns={columns}
          rowGetter={i => rows[i]}
          rowsCount={rows.length}
          // onGridRowsUpdated={this.onGridRowsUpdated}
          enableCellSelect={true}
        />
      </div>
    );
  }
}

export default Players;
