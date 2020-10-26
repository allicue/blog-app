import React from 'react'
import './App.css';
import Home from './screens/Home/Home'
import CreatePost from './screens/CreatePost/CreatePost'
import PostDetail from './screens/PostDetail/PostDetail'
import { Route, Switch } from 'react-router-dom'

function App() {
  return (
    <div>

      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/CreatePost' component={CreatePost} />
        <Route exact path='/posts/:id' component={PostDetail}/>
      </Switch>

    </div>
  );
}

export default App;
