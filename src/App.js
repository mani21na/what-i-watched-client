import React from 'react';
import { Switch, Route } from 'react-router-dom'
import './App.css';

import { fetchUsers } from './actions/userActions.js'
import { connect } from 'react-redux'

import Hearder from './components/Header';
import PostContainer from './containers/PostContainer'
import PostForm from './containers/PostForm';
import UserForm from './containers/UserForm';

class App extends React.Component {

  componentDidMount() {
    console.log("app component did mount")
    // call an action that fetches all posts in state
    //async
    this.props.fetchUsers()
    console.log(this.props)
    console.log("app component finished action calls")
  }

  render() {
    return(
      <div className="App">
        <Hearder />
        <hr />
        {this.props.loading ? null  : 
          <Switch>
            <Route path='/posts/new' component={() => <PostForm users={this.props.users} />}/>
            <Route path='/users/new' component={() => <UserForm />} />
            <Route path='/' render={() => <PostContainer />} />
          </Switch>
        }
     </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
      users: state.userReducer.users,
      loading: state.userReducer.loading
  }
}

export default connect(mapStateToProps, { fetchUsers })(App)