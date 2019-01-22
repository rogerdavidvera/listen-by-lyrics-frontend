import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

/* Redux Configuration */

// Provides the redux store to rest of the app components
import { Provider } from 'react-redux';
// Delays the rendering of the app’s UI until the persisted state
// has been retrieved and saved to redux.
import { PersistGate } from 'redux-persist/lib/integration/react';
//
import { persistor, store } from './store';

/* React Router */
import { BrowserRouter as Router } from 'react-router-dom';
import { Route } from 'react-router-dom';

/* Necessary Components */
import Loading from './Loading'
import App from './App';

import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={Loading} persistor={persistor}>
      <Router>
        <Route path='/' component={App} />
      </Router>
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
