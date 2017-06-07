import { counter } from './reducers'
import { combineReducers, createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import { routerReducer, routerMiddleware } from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'
import promiseMiddleware from 'redux-promise'
import { reducer as formReducer } from 'redux-form'
import errorMiddleware from './middlewares/errorMiddleware'
export const history = createHistory()
const routeMid = routerMiddleware(history)

const reducers = combineReducers({
    counter,
    router: routerReducer,
    form: formReducer,
})
const handler = err => console.log(err.message || err.code)
const middlewareList = [routeMid, promiseMiddleware, errorMiddleware(handler)]
if (process.env.NODE_ENV !== 'production') {
    middlewareList.push(logger)
}
const middlewares = applyMiddleware(...middlewareList)

let store = createStore(reducers, middlewares)

export default store
