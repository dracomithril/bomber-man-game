import React from 'react';
import Player from '../player';
import Map from '../map';
import { MAP_HEIGHT, MAP_WIDTH } from '../../config/constants';
import { tiles } from '../../data/maps/1';

const World = () => (
  <div style={{
    position: 'relative',
    width: MAP_WIDTH,
    height: MAP_HEIGHT,
    margin: '20px auto',
  }}
  >
    <Map tiles={tiles} />
    <Player />
  </div>
);

World.propTypes = {};

export default World;
