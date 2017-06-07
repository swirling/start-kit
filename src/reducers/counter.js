import { handleActions } from 'redux-actions'
import { addCount, loadCount } from '../actions/counter'

export default handleActions(
    {
        [addCount]: (state, action) => state + action.payload,
        [loadCount]: (state, action) => action.payload,
    },
    0
)
