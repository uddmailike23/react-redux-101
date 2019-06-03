const initialState = {
  isFetching: false,
  currentUser: {},
  error: null,
  action: null
}

function reducer(state = initialState, { type, payload }) {
  switch (type) {
    case 'APP_FETCH_USER_PENDING_NORMAL':
      const newState = Object.assign({}, state)
      newState.isFetching = true
      newState.action = type
      return newState
    case 'APP_FETCH_USER_PENDING_ES6':
      return { ...state, isFetching: true, action: type }
    case 'APP_FETCH_USER_SUCCESS':
      return { ...state, isFetching: false, currentUser: payload, action: type }
    default:
      return state
  }
}

export default reducer
