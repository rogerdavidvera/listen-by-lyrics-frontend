import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';

/* React Router */
import { BrowserRouter as Router } from 'react-router-dom';
import { Route } from 'react-router-dom';

/* Redux Configuration */
import { Provider } from 'react-redux';
import store from './store.js';

import * as serviceWorker from './serviceWorker';


ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Route path='/' component={App} />
    </Router>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
