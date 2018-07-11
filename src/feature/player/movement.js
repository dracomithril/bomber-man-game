import store from '../../config/store';
import { MAP_HEIGHT, MAP_WIDTH, SPRITE_SIZE } from '../../config/constants';
import { movePlayer } from './action';

const DIRECTIONS = {
  WEST: 'WEST',
  NORTH: 'NORTH',
  EAST: 'EAST',
  SOUTH: 'SOUTH',
};
const getNewPosition = (direction, oldPos) => {
  switch (direction) {
    case DIRECTIONS.WEST:
      return [oldPos[0] - SPRITE_SIZE, oldPos[1]];
    case DIRECTIONS.EAST:
      return [oldPos[0] + SPRITE_SIZE, oldPos[1]];
    case DIRECTIONS.NORTH:
      return [oldPos[0], oldPos[1] - SPRITE_SIZE];
    case DIRECTIONS.SOUTH:
      return [oldPos[0], oldPos[1] + SPRITE_SIZE];
    default:
      return oldPos;
  }
};
const observeBoundaries = (oldPos, newPos) => {
  const condition = (newPos[0] >= 0 && newPos[0] <= MAP_WIDTH - SPRITE_SIZE)
    && (newPos[1] >= 0 && newPos[1] <= MAP_HEIGHT - SPRITE_SIZE);
  return condition
    ? newPos : oldPos;
};

const makePlayerMoveThunk = direction => (dispatch, getState) => {
  const oldPos = getState().player.position;
  const newPos = observeBoundaries(oldPos, getNewPosition(direction, oldPos));
  return dispatch(movePlayer(newPos));
};

const handleMovement = (player) => {
  const dispatchMove = (direction) => {
    store.dispatch(makePlayerMoveThunk(direction));
  };

  const handleKeyDown = (e) => {
    if ([37, 38, 39, 40].includes(e.keyCode)) {
      e.preventDefault();
    }
    switch (e.keyCode) {
      case 37:
        return dispatchMove(DIRECTIONS.WEST);
      case 38:
        return dispatchMove(DIRECTIONS.NORTH);
      case 39:
        return dispatchMove(DIRECTIONS.EAST);
      case 40:
        return dispatchMove(DIRECTIONS.SOUTH);
      default:
        return true;
    }
  };

  window.addEventListener('keydown', (e) => {
    handleKeyDown(e);
  });
  return player;
};

export default handleMovement;
