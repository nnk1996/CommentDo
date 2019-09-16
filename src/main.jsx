import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import App from './containers/App';

ReactDOM.render(
   <Router history = {browserHistory}>
      <Route path = "/" component = {App} />
      <Route path = "/:userId" component = {App} />
   </Router>
, document.getElementById('app'));
