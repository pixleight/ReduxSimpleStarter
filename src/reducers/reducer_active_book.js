// State argument is not application state, only the state this reducer is responsible for.
export default function(state = null, action) {
  switch(action.type) {
    // if the action is BOOK_SELECTED
    case 'BOOK_SELECTED':
      // return the payload of the action
      return action.payload
  }

  // if we don't care about the action:
  return state
}
