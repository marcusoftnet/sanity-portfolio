import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AboutComponent from './components/AboutComponent';
import HomeComponent from './components/HomeComponent';
import PostsComponent from './components/PostsComponent';
import ProjectComponent from './components/ProjectComponent';
import SinglePostComponent from './components/SinglePostComponent';
import './index.css';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' component={HomeComponent} exact />
        <Route path='/about' component={AboutComponent} />
        <Route path='/project' component={ProjectComponent} />
        <Route path='/posts/:slug' component={SinglePostComponent} />
        <Route path='/posts' component={PostsComponent} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
