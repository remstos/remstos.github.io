import React from 'react'
import ReactDOM from 'react-dom'
import {Router, Route, IndexRoute, browserHistory} from 'react-router'

/* Routes components */
import App from './components/App'
import Home from './components/Home'

// Style
require('./../assets/styles/main.less')

ReactDOM.render((
  <Router history={browserHistory}>
    <Route component={App} path='/'>
      <IndexRoute component={Home}/>
    </Route>
  </Router>
), document.getElementById('app'))
