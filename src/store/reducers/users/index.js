import * as Actions from '../../actions/users'

const initialState = {
  isFetching: false,
  currentUser: {},
  error: null,
  action: null
}

const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case Actions.APP_FETCH_USER_PENDING:
      return { ...state, isFetching: true, action: type }
    case Actions.APP_FETCH_USER_SUCCESS:
      return { ...state, isFetching: false, currentUser: payload, action: type }
    default:
      return state
  }
}

export default userReducer
