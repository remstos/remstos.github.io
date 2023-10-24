import React from 'react'
import ReactDOM from 'react-dom'
import {Router, Route, IndexRoute, browserHistory} from 'react-router'

/* Routes components */
import App from './components/App'
import Home from './components/Home'
import Page404 from './components/Page404'
import AppStoreTermsPrivacy from './components/AppStoreTermsPrivacy'

// Style
require('./../assets/styles/main.less')

ReactDOM.render((
  <Router history={browserHistory}>
    <Route component={App} path='/'>
      <IndexRoute component={Home}/>
      <Route path='/apps/*/terms-privacy' component={AppStoreTermsPrivacy}/>
      <Route path='*' component={Page404}/>
    </Route>

  </Router>
), document.getElementById('app'))
