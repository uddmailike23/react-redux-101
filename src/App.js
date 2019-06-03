import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as Actions from './store/actions/users'
import './App.css'

class App extends Component {
  onFetchUser = () => {
    const { myFetchUserPending, myFetchUserSuccess } = this.props
    myFetchUserPending()
    myFetchUserSuccess()
  }

  render() {
    const { user } = this.props

    return (
      <div className="App">
        <header className="App-header">
          {user.isFetching ? (
            <h1>Loading...</h1>
          ) : (
            <h1>Current user: {user.currentUser.name}</h1>
          )}
          <button onClick={this.onFetchUser}>FETCH USER</button>
        </header>
      </div>
    )
  }
}

const mapStateToProps = state => {
  // return global state form redux store to local state
  return {
    user: state.userReducer
  }
}

const mapDispatchToProps = dispatch => {
  return {
    myFetchUserPending: () => {
      dispatch(Actions.fetchUserPending())
    },
    myFetchUserSuccess: () => {
      dispatch(Actions.fetchUserSuccess({ name: 'Nonchana.S' }))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
