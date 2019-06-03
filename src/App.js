import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as Actions from './store/actions/users'
import './App.css'

class App extends Component {
  onFetchUser = () => {
    const { myFetchUserSuccess } = this.props
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
            // <h1>Current user: {user.currentUser.name}</h1>
            user.currentUser.cards &&
            user.currentUser.cards.map(card => {
              return (
                <div key={card.number}>
                  <img src={card.imageUrl} width="160" alt={card.name} />
                  <p>{card.name}</p>
                </div>
              )
            })
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
  return bindActionCreators(
    {
      myFetchUserSuccess: Actions.fetchUserSuccess
    },
    dispatch
  )
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
