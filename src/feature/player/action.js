import { MOVE_PLAYER } from '../../action_types';

export const movePlayer = position => ({
  type: MOVE_PLAYER,
  payload: {
    position,
  },
});
export default { MOVE_PLAYER };
