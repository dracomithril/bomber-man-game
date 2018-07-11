import React from 'react';
import PropTypes from 'prop-types';
import { SPRITE_SIZE } from '../../config/constants';

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

export default MapTile;
