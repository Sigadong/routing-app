import React from 'react';
import { Switch, Route, NavLink, Redirect, Prompt } from 'react-router-dom';
import About from './pages/About';
import Category from './pages/Category';
import Post from './pages/Post';
import Member from './pages/Member';
import Login from './pages/Login';
import GuardRoute from './components/GuardRoute';
import './App.css';
const Home = React.lazy(() => import('./pages/Home'));

function App() {
  const [isLogin, setLogin] = React.useState(false);

  const routes = [
    {
      path: "/",
      Component: Home,
      props: {
        exact: true,
      }
    },
    {
      path: "/about",
      Component: About,
    },
    {
      path: "/member",
      Component: Member,
      props: {
        auth: true,
        isLogin: isLogin,
      }
    },
    {
      path: "/post/:id",
      Component: Post,
    },
    {
      path: "/login",
      Component: Login,
      childProps: { setLogin },
    },
    {
      path: "/category",
      Component: Category,
    },
  ];


  return (
    <React.Suspense fallback={<div>Loading...</div>}>
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
            {
              routes.map((route, i) => {
                const {
                  path,
                  Component,
                  props,
                  childProps
                } = route;
                console.log(route);

                return (props && props.auth)
                  ? <GuardRoute key={i} path={path} {...props}>
                    <Component {...childProps} />
                  </GuardRoute>
                  : <Route key={i} path={path} {...props}>
                    <Component {...childProps} />
                  </Route>
              })
            }
          </Switch>
        </div>
      </div >
    </React.Suspense>
  );
}

export default App;
