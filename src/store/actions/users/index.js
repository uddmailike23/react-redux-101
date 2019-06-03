import Axios from 'axios'

// import axios from 'axios'
export const APP_FETCH_USER_PENDING = 'APP_FETCH_USER_PENDING'
export const APP_FETCH_USER_SUCCESS = 'APP_FETCH_USER_SUCCESS'
export const APP_FETCH_USER_ERROR = 'APP_FETCH_USER_ERROR'

// export const fetchUserPending = () => {
//   return dispatch => {
//     dispatch({
//       type: APP_FETCH_USER_PENDING
//     })
//   }
// }

export const fetchUserSuccess = () => {
  return dispatch => {
    dispatch({
      type: APP_FETCH_USER_PENDING
    })

    Axios.get('https://api.magicthegathering.io/v1/cards')
      .then(response => {
        dispatch({
          type: APP_FETCH_USER_SUCCESS,
          payload: response.data
        })
      })
      // eslint-disable-next-line handle-callback-err
      .catch(error => {
        dispatch({
          type: APP_FETCH_USER_ERROR,
          payload: error
        })
      })
  }
}
