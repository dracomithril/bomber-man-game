import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension/logOnlyInProduction';
import playerReducer from '../feature/player/reducer';
import mapReducer from '../feature/map/reducer';
import initState from './initState';

const rootReducer = combineReducers({
  player: playerReducer,
  map: mapReducer,
});

const composeEnhancer = composeWithDevTools({});

const configureStore = () => createStore(rootReducer, initState(),
  composeEnhancer(applyMiddleware(thunk)));

export default configureStore;
