import React from 'react';
import { players } from './api';

class Players extends React.Component {

  constructor(props) {
    super(props) 
    this.state = {};
  }

  render() {
    return(
      <div>
        <ul>This is the Players Table
          {/* {
            players.map((player) => {
              <li>player</li>
            })
          } */}
          
        </ul>
      </div>
    )
  }

}

export default Players;