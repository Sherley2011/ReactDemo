import { ADD_USER } from '../actions/user'

const initialState = [
  {
    name: 'Chenfay',
    id: 0
  }
]
let maxId=0
export default function users(state = initialState, action) {
  switch (action.type) {
    case ADD_USER:
      return [
        {
          id: maxId++,
          name: action.name
        },
        ...state
      ]
    default:
      return state
  }
}
