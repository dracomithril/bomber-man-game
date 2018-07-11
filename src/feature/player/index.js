import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import playerWalk from './player_walk.png';
import handleMovement from './movement';
import { SPRITE_SIZE } from '../../config/constants';

const Player = ({ position }) => (
  <div
    style={{
      position: 'absolute',
      top: position[1],
      left: position[0],
      background: `url('${playerWalk}')`,
      backgroundPosition: '0 0',
      width: SPRITE_SIZE,
      height: SPRITE_SIZE,
    }}
  />

);
const mapStateToProps = state => ({ ...state.player });

Player.propTypes = {
  position: PropTypes.arrayOf(Number).isRequired,
};
export default connect(mapStateToProps)(handleMovement(Player));
