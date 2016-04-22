import {Map, fromJS} from 'immutable'
import { FETCH_USERS } from '../actions/user'

const initialState = [
  {
    name: 'ccccqqs'
  }
]
export default (state = initialState, action) => {
    switch (action.type) {
    	case FETCH_USERS:
    		return fromJS(action.payload)
        default:
            return state
    }
}
