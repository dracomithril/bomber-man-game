import React from 'react';
import Player from '../player';
import Map from '../map';
import { MAP_HEIGHT, MAP_WIDTH } from '../../config/constants';


class World extends React.Component {
  componentWillMount() {

  }

  render() {
    return (
      <div style={{
        position: 'relative',
        width: `${MAP_WIDTH}px`,
        height: `${MAP_HEIGHT}px`,
        margin: '20px auto',
      }}
      >
        <Map />
        <Player />
      </div>
    );
  }
}

World.propTypes = {};

export default World;
