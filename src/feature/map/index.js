import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { MAP_HEIGHT, MAP_WIDTH } from '../../config/constants';
import './styles.css';
import MapRow from './mapRow';

const Map = ({ tiles }) => (
  <div
    style={{
      position: 'relative',
      top: 0,
      left: 0,
      width: `${MAP_WIDTH}px`,
      height: `${MAP_HEIGHT}px`,
      backgroundColor: 'green',
      margin: '10px auto',
    }}
  >
    {
      tiles.map((row, id) => ({ id: `row_${id}`, value: row }))
        .map((row, index) => <MapRow tiles={row.value} rowNumber={index} key={row.id} />)
    }
  </div>
);

Map.propTypes = {
  tiles: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.number)).isRequired,
};

const mapStateToProps = state => ({
  tiles: state.map.tiles,
});

export default connect(mapStateToProps)(Map);
