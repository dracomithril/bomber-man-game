import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import playerWalk from './player_walk.png';
import { SPRITE_SIZE } from '../../config/constants';
import { DIRECTIONS, attemptMove } from './movement';

class Player extends React.Component {
  componentDidMount() {
    window.addEventListener('keydown', (e) => {
      this.handleKeyDown(e);
    });
  }

  handleKeyDown = (e) => {
    const { movePlayer } = this.props;
    if ([37, 38, 39, 40].includes(e.keyCode)) {
      e.preventDefault();
    }
    switch (e.keyCode) {
      case 37:
        return movePlayer(DIRECTIONS.WEST);
      case 38:
        return movePlayer(DIRECTIONS.NORTH);
      case 39:
        return movePlayer(DIRECTIONS.EAST);
      case 40:
        return movePlayer(DIRECTIONS.SOUTH);
      default:
        return true;
    }
  };

  render() {
    const { position } = this.props;
    return (
      <div
        style={{
          position: 'absolute',
          top: position[1],
          left: position[0],
          background: `url('${playerWalk}')`,
          backgroundPosition: '0 0',
          width: `${SPRITE_SIZE}px`,
          height: `${SPRITE_SIZE}px`,
        }}
      />

    );
  }
}
const mapStateToProps = state => ({ ...state.player });

const mapDispatchToProps = dispatch => ({
  movePlayer: direction => dispatch(attemptMove(direction)),
});

Player.propTypes = {
  position: PropTypes.arrayOf(Number).isRequired,
  movePlayer: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Player);
