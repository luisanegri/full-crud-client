import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import SignUp from './components/SignUp';
import Login from './components/Login';
import PostFormContainer from './components/PostFormContainer';
import PostsListContainer from './components/PostsListContainer';

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={SignUp} />
      <Route path="/login" component={Login} />
      <Route path="/createpost" component={PostFormContainer} />
      <Route path="/posts" component={PostsListContainer} />
    </div>
  );
}

export default App;
