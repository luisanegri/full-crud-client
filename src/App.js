import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import SignUp from './components/SignUp';
import Login from './components/Login';

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={SignUp} />
      <Route path="/login" component={Login} />
    </div>
  );
}

export default App;
