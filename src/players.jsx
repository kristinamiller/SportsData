import React, { useState, useEffect } from "react";
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

const handleFilterChange = filter => filters => { //don't understand syntax here
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

function Players({ rows }) {
  const [filters, setFilters] = useState({});
  const filteredRows = getRows(rows, filters);
  const [state, setState] = useState({ players: [] });

  useEffect(() => {
    const getPlayers = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(players);
      }, 1000);
    });

    getPlayers.then(playerInfo => {
      setState({ players: playerInfo });
    });
  });

  rows = state.players.map((player, idx) => {
    let row = {};
    columns.forEach((column, idx) => {
      row[column.key] = player[column.key];
    });

    return row;
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
        onAddFilter={filter => setState(handleFilterChange(filter))}
        onClearFilters={() => setFilters({})}
        getValidFilterValues={columnKey =>
          getValidFilterValues(rows, columnKey)
        }
      />
    </div>
  );
}

export default Players;
