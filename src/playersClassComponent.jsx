import React, { useState } from "react";
import { players } from "./api";
// import TableFilter from "react-table-filter";
import ReactDataGrid from "react-data-grid";
import { Toolbar, Data, Filters } from "react-data-grid-addons";

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
  { key: "player_id", name: "Player ID", filterable: true },
  { key: "game_id", name: "Game ID", filterable: true },
  { key: "name", name: "Name", filterable: true },
  { key: "team_abbr", name: "Team", filterable: true },
  { key: "opp_abbr", name: "Name", filterable: true },
  { key: "team_name", name: "Team Name", filterable: true },
  { key: "opp_name", name: "Opp Name", filterable: true },
  { key: "points", name: "Points", editable: true, filterable: true },
  { key: "assists", name: "Assists", editable: true, filterable: true },
  { key: "rebounds", name: "Rebounds", editable: true, filterable: true },
  { key: "starter", name: "Starter", editable: true, filterable: true },
  { key: "active", name: "Active", editable: true }
];

const selectors = Data.Selectors;
const {
  NumericFilter,
  AutoCompleteFilter,
  MultiSelectFilter,
  SingleSelectFilter
} = Filters;

const handleFilterChange = filter => filters => {
  const newFilters = { ...filters };
  if (filter.filterTerm) {
    newFilters[filter.column.key] = filter;
  } else {
    delete newFilters[filter.column.key];
  }
  return newFilters;
};

function getValidFilterValues(rows, columnId) {
  return rows
    .map(r => r[columnId])
    .filter((item, i, a) => {
      return i === a.indexOf(item);
    });
}

function getRows(rows, filters) {
  return selectors.getRows({ rows, filters });
}

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
    const [filters, setFilters] = useState({});
    const filteredRows = getRows(rows, filters);
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
          toolbar={<Toolbar enableFilter={true} />}
          onAddFilter={filter => setFilters(handleFilterChange(filter))}
          onClearFilters={() => setFilters({})}
        />
      </div>
    );
  }
}

export default Players;
