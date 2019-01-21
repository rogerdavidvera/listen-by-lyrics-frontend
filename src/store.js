import { createStore, compose, applyMiddleware } from 'redux'
import rootReducer from './reducers/rootReducer'
import thunk from 'redux-thunk'

// When extension is not installed, use Redux's compose
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Setup store with middleware and enhancers
export function configureStore() {
  return createStore(
    rootReducer,
    composeEnhancer(applyMiddleware(thunk))
  )
};

export default configureStore();
