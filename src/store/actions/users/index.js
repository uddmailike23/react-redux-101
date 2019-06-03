export const APP_FETCH_USER_PENDING = 'APP_FETCH_USER_PENDING'
export const APP_FETCH_USER_SUCCESS = 'APP_FETCH_USER_SUCCESS'

export function fetchUserPending() {
  return {
    type: APP_FETCH_USER_PENDING
  }
}

export function fetchUserSuccess(payload) {
  return {
    type: APP_FETCH_USER_SUCCESS,
    payload
  }
}
