import { tiles } from '../data/maps/1';

const initState = {
  player: {
    position: [0, 0],
  },
  map: { tiles },
};
export default () => initState;
