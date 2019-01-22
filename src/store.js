import { createStore, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // Defaults to localStorage for web app

import rootReducer from './reducers/rootReducer'

const persistConfig = {
  key: 'root',
  storage: storage
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

// When extension is not installed, use Redux's compose
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Setup store with middleware and enhancers
export const store = createStore(
  persistedReducer, // Wraps the app's root reducer
  composeEnhancer(applyMiddleware(thunk))
);

// Once store is created, the persistStore function ensures that the redux
// state is saved to persisted storage whenever it changes
export const persistor = persistStore(store);
