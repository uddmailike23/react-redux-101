import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as Actions from './store/actions/users'
import './App.css'

class App extends Component {
  onFetchUser = () => {
    console.log(this.props)
    const { myFetchUserSuccess } = this.props
    myFetchUserSuccess()
  }

  render() {
    const { user } = this.props
    return (
      <div className="App">
        <header className="App-header">
          <h1>Current user: {user.currentUser.name}</h1>
          <button onClick={this.onFetchUser}>FETCH USER</button>
        </header>
      </div>
    )
  }
}

const mapStateToProps = state => {
  // return global state form redux store to local state
  console.log('store.getState()', state)
  return {
    user: state.userReducer
  }
}

const mapDispatchToProps = dispatch => {
  return {
    myFetchUserSuccess: () => {
      dispatch(Actions.fetchUserSuccess({ name: 'Nonchana.S' }))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
