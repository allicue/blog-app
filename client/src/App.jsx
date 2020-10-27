import React from 'react'
import './App.css';
import Home from './screens/Home/Home'
import CreatePost from './screens/CreatePost/CreatePost'
import PostDetail from './screens/PostDetail/PostDetail'
import { Route, Switch } from 'react-router-dom'
import PostEdit from './screens/PostEdit/PostEdit'

function App() {
  return (
    <div>

      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/CreatePost' component={CreatePost} />
        <Route exact path='/posts/:id' component={PostDetail} />
        <Route path='/posts/:id/edit' component={PostEdit} />

      </Switch>

    </div>
  );
}

export default App;
