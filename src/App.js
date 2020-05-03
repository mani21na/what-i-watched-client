import React from 'react';
import { Switch, Route } from 'react-router-dom'
import './App.css';

import Hearder from './components/Header';
import PostContainer from './containers/PostContainer'
//import PostForm from './containers/PostForm';
//import UserForm from './containers/UserForm';

class App extends React.Component {
  
  render() {
    return(
      <div className="App">
       <Hearder />
       <hr />
        
        <Switch>
          <Route exact path='/' component={<PostContainer />} />
        </Switch>
     </div>
    )
  }
}

export default App;