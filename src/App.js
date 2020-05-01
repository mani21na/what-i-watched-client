import React from 'react';
import './App.css';
import PostContainer from './containers/PostContainer'
import Hearder from './components/Header';

function App() {
  return (
    <div className="App">
      <Hearder />
      <hr />
      <PostContainer />
    </div>
  );
}

export default App;