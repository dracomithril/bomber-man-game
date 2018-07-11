import { MAP_HEIGHT, MAP_WIDTH, SPRITE_SIZE } from '../../config/constants';
import { movePlayer } from './action';

export const DIRECTIONS = {
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

const observeImpassable = ([x, y], tiles) => {
  const newPosY = (y / SPRITE_SIZE);
  const newPosX = (x / SPRITE_SIZE);
  try {
    const nextTile = tiles[newPosY][newPosX];
    return nextTile < 5;
  } catch (e) {
    return false;
  }
};

const observeBoundaries = (oldPos, newPos) => (newPos[0] >= 0
  && newPos[0] <= MAP_WIDTH - SPRITE_SIZE) && (newPos[1] >= 0
    && newPos[1] <= MAP_HEIGHT);

export const attemptMove = direction => (dispatch, getState) => {
  const { player, map } = getState();
  const oldPos = player.position;
  const { tiles } = map;
  const newPosition = getNewPosition(direction, oldPos);
  if (observeBoundaries(oldPos, newPosition) && observeImpassable(newPosition, tiles)) {
    dispatch(movePlayer(newPosition));
  }
};
