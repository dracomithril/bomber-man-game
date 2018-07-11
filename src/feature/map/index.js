import React from 'react';
import PropTypes from 'prop-types';
import { MAP_HEIGHT, MAP_WIDTH, SPRITE_SIZE } from '../../config/constants';
import './styles.css';

const getTileSprite = (type) => {
  switch (type) {
    case 0:
      return 'grass';
    case 5:
      return 'rock';
    case 6:
      return 'tree';
    default:
      return 'grass';
  }
};
const MapTile = ({ tile }) => (
  <div className={`tile ${getTileSprite(tile)}`} style={{ height: SPRITE_SIZE, width: SPRITE_SIZE }} />
);
MapTile.propTypes = {
  tile: PropTypes.number.isRequired,
};
const MapRow = ({ tiles }) => (
  <div className="row">
    {tiles.map(tile => <MapTile tile={tile} />)}
  </div>
);
MapRow.propTypes = {
  tiles: PropTypes.arrayOf(PropTypes.number).isRequired,
};
const Map = ({ tiles }) => (
  <div
    style={{
      position: 'relative',
      top: 0,
      left: 0,
      width: MAP_WIDTH,
      height: MAP_HEIGHT,
      backgroundColor: 'green',
      border: '4px solid white',
      margin: '10px auto',
    }}
  >
    {
      tiles.map(row => <MapRow tiles={row} />)
    }
  </div>
);
Map.propTypes = {
  tiles: PropTypes.arrayOf().isRequired,
};

export default Map;
