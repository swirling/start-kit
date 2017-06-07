import React from 'react'
import { history } from './store'
import { Route, Router } from 'react-router'
import Home from './components/Home'
import Counter from './components/Counter'

const RouteComponent = () =>
    <Router history={history}>
        <div>
            <Route path="/" component={Home} />
            <Route path="/counter" component={Counter} />
        </div>
    </Router>

export default RouteComponent
