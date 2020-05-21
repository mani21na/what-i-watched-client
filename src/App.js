import React from 'react';
import { Switch, Route } from 'react-router-dom'
import './styles/App.css';

import Hearder from './components/Header';
import PostContainer from './containers/PostContainer'
import PostForm from './containers/PostForm';
import UserForm from './containers/UserForm';

class App extends React.Component {

  render() {
    return(
      <div className="App">
        <Hearder />
          <Switch>
            <Route path='/posts/new' component={() => <PostForm />}/>
            <Route path='/users/new' component={() => <UserForm />} />
            <Route path='/' render={() => <PostContainer />} />
          </Switch>
      </div>
    )
  }
}

export default App
