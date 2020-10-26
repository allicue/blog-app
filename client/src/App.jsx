import React from 'react'
import './App.css';
import Home from './screens/Home/Home'
import CreatePost from './screens/CreatePost/CreatePost'
import { Route, Switch } from 'react-router-dom'

function App() {
  return (
    <div>

      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/CreatePost' component={CreatePost} />
      </Switch>

    </div>
  );
}

export default App;
