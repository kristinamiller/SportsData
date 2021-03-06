 render() {
    return (
      <div className="players-table">
        <div>Search</div>
        {/* <TableFilter rows="" onFilterUpdate={this._filterUpdated}>
          <th filterkey="name">Name</th>
          <th filterkey="season">Season</th>
          <th filterkey="number">Number</th>
        </TableFilter> */}
        <ul className="players-ul">
          <li>
            <ul className="player-row header">
              <li key="a" className="player-item number header">
                Player Id
              </li>
              <li key="b" className="player-item number header">
                Game Id
              </li>
              <li key="c" className="player-item name header">
                Name
              </li>
              <li key="d" className="player-item number header">
                Team
              </li>
              <li key="e" className="player-item name header">
                Team Name
              </li>
              <li key="f" className="player-item number header">
                Opp
              </li>
              <li key="g" className="player-item name header">
                Opp Name
              </li>
              <li key="h" className="player-item number header">
                Points
              </li>
              <li key="i" className="player-item number header">
                Assists
              </li>
              <li key="j" className="player-item number header">
                Rebounds
              </li>
              <li key="k" className="player-item number header">
                Starter
              </li>
              <li key="l" className="player-item number header">
                Status
              </li>
            </ul>
          </li>

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
                    <select name="" id="">
                      <option value="">
                        {player.active === 1 ? "active" : "inactive"}
                      </option>
                      <option value="">
                        {player.active === 1 ? "inactive" : "active"}
                      </option>
                    </select>
                  </li>
                </ul>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }



          <table className="basic-table">
          <thead>
            <TableFilter rows={playerData} onFilterUpdate={this._filterUpdated}>
              {tableHeaders.map((header, idx) => {
                return (
                  <th
                    key={"header_" + idx}
                    className="cell"
                    filterkey={header}
                    showsearch={"true"}
                  >
                    {header}
                  </th>
                );
              })}
            </TableFilter>
          </thead>
          <tbody>{tableRows}</tbody>
        </table>