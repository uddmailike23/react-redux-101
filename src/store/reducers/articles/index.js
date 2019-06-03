const initialState = {
  isFetching: false,
  articles: [],
  error: null,
  action: null
}

const articleReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case 'APP_FETCH_ARTICLE_PENDING':
      return { ...state, isFetching: true, action: type }
    case 'APP_FETCH_ARTICLE_SUCCESS':
      return { ...state, isFetching: false, articles: payload, action: type }
    default:
      return state
  }
}

export default articleReducer
