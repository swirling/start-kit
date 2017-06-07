import React, { Component } from 'react'
import store from './store'
import { Provider } from 'react-redux'
import Route from './Route'

class App extends Component {
    render() {
        return <Route />
    }
}

export default () => <Provider store={store}><App /></Provider>
