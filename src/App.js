import React, { Component } from 'react'
import { connect } from 'react-redux'
import './App.css'

class App extends Component {
  onFetchUser = () => {
    const { fetchUserSuccess } = this.props
    fetchUserSuccess()
  }

  render() {
    const { myCurrentUser } = this.props
    return (
      <div className="App">
        <header className="App-header">
          <h1>Current user: {myCurrentUser.name}</h1>
          <button onClick={this.onFetchUser}>FETCH USER</button>
        </header>
      </div>
    )
  }
}

const mapStateToProps = state => {
  // return global state form redux store to local state
  return {
    myCurrentUser: state.currentUser
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchUserPendingES6: () => {
      dispatch({
        type: 'APP_FETCH_USER_PENDING_ES6'
      })
    },
    fetchUserSuccess: () => {
      dispatch({
        type: 'APP_FETCH_USER_SUCCESS',
        payload: {
          name: 'Nonchana.S'
        }
      })
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
