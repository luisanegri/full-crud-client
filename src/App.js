import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import SignUp from './components/SignUp';
import Login from './components/Login';
import PostContainer from './components/PostContainer';

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={SignUp} />
      <Route path="/login" component={Login} />
      <Route path="/createpost" component={PostContainer} />
    </div>
  );
}

export default App;
