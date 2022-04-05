import React from 'react';
import { Switch, Route, NavLink, Redirect, Prompt } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Category from './pages/Category';
import Post from './pages/Post';
import Member from './pages/Member';
import Login from './pages/Login';
import GuardRoute from './components/GuardRoute';

import './App.css';


function App() {
  const [isLogin, setLogin] = React.useState(false);

  return (
    <div div className="App" >
      <ul className="menu">
        <li><NavLink to="/" activeClass="active" exact>Home</NavLink></li>
        <li><NavLink to="/about" activeClass="active">About</NavLink></li>
        <li><NavLink to="/member" activeClass="active">Member</NavLink></li>
        <li><NavLink to="/category" activeClass="active">Category</NavLink></li>
        <li>
          {isLogin ?
            <NavLink to="/logout" onClick={(e) => {
              e.preventDefault()
              setLogin(false)
            }}>Logout</NavLink> :
            <NavLink to="/login" activeClass="active">Login</NavLink>
          }
        </li>
      </ul>
      <div className="main">
        <Switch>
          <Route path="/about">
            <About />
            <Prompt message="Are You sure want to leave?" />
          </Route>
          <GuardRoute path="/member" isLogin={isLogin}>
            <Member />
          </GuardRoute>
          <Route path="/login">
            <Login setLogin={setLogin} />
          </Route>
          <Route path="/category" component={Category}>
          </Route>
          <Route path="/post/:id">
            <Post />
          </Route>
          <Route path="/" exact>
            <Home />
          </Route>
        </Switch>
      </div>
    </div >
  );
}

export default App;
