import {
  createStore, compose, applyMiddleware, combineReducers
} from 'redux';
import thunk from 'redux-thunk';
import fooReducer from './foo/reducer';
import barReducer from './bar/reducer';

const rootReducer = combineReducers({
  foo: fooReducer,
  bar: barReducer
});

const middleware = applyMiddleware(thunk);

export default function configureStore() {
  const composeEnhancers = typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;
  const enhancer = composeEnhancers(middleware);

  return createStore(
    rootReducer,
    {},
    enhancer,
  );
}
