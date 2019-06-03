import React, { Component } from 'react'
import { connect } from 'react-redux'
import './App.css'

class App extends Component {
  onFetchUser = () => {
    const { dispatch } = this.props
    dispatch({
      type: 'APP_FETCH_USER_PENDING_ES6'
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <button onClick={this.onFetchUser}>FETCH USER</button>
        </header>
      </div>
    )
  }
}

export default connect()(App)
