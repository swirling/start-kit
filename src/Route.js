import React from 'react';
import { Route, Router } from 'react-router';
import { history } from './store';
import Home from './components/Home';
import CounterC from './components/Counter';

const RouteComponent = () =>
  (<Router history={history}>
    <div>
      <Route path="/" component={Home} />
      <Route path="/counter" component={CounterC} />
    </div>
  </Router>);

export default RouteComponent;
