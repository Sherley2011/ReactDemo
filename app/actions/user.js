const ADD_USER='ADD_USER'

export function addUser(name) {
  return { type: types.ADD_USER, name }
}
