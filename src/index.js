import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'
import { createStore } from 'redux'
import reducer from './reducer'

const store = createStore(reducer)

console.log('store >>>', store)
console.log('0 store.getState() >>>', store.getState())

store.dispatch({
  type: 'APP_FETCH_USER_PENDING_NORMAL'
})

console.log('1 store.getState() >>>', store.getState())

store.dispatch({
  type: 'APP_FETCH_USER_SUCCESS',
  payload: {
    name: 'Nonchana'
  }
})

console.log('2 store.getState() >>>', store.getState())

ReactDOM.render(<App />, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
