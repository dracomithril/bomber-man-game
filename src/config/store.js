import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension/logOnlyInProduction';
import playerReducer from '../feature/player/reducer';

const rootReducer = combineReducers({
  player: playerReducer,
});

const composeEnhancer = composeWithDevTools({});

const store = createStore(rootReducer,
  composeEnhancer(applyMiddleware(thunk)));

export default store;
