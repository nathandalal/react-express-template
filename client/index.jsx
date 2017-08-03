import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router, Switch, Route, Redirect, Link } from 'react-router-dom'

import Home from './components/home.jsx'
import About from './components/about.jsx'

class Index extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    let routes = [
      { path: "/",           name: "Home",        btnType: "primary",   component: Home },
      { path: "/about",      name: "About",       btnType: "info",      component: About }
    ]

    return (
      <Router>
        <div style={{padding: "5%"}}>
        <Switch>
            {routes.map(route => <Route exact path={route.path} component={route.component} key={route.path} />)}
            <Redirect to ="/"/>
          </Switch>
          <div className="block">
            {routes.map(route => <Link to={route.path} className={`button is-${route.btnType}`} key={route.path}>{route.name}</Link>)}
          </div>
        </div>
      </Router>
    )
  }
}

render(<Index />, document.getElementById('app'))