import React from 'react';
import PropTypes from 'prop-types';
import MapTile from './mapTile';
import { SPRITE_SIZE } from '../../config/constants';

const MapRow = ({ tiles, rowNumber }) => (
  <div className="row" style={{ height: SPRITE_SIZE }}>
    {tiles.map((tile, id) => ({ id: `tile_${rowNumber}_${id}`, value: tile }))
      .map(tile => <MapTile key={tile.id} tile={tile.value} />)}
  </div>
);

MapRow.propTypes = {
  tiles: PropTypes.arrayOf(PropTypes.number).isRequired,
  rowNumber: PropTypes.number.isRequired,
};

export default MapRow;
