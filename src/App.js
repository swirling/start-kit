import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Route from './Route';

const App = () => <Route />;

export default () => <Provider store={store}><App /></Provider>;
