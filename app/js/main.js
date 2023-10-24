import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter, Route, Switch } from "react-router-dom";

/* Routes components */
import Home from './components/Home'
import Page404 from './components/Page404'
import AppStoreTermsPrivacy from './components/AppStoreTermsPrivacy'

// Style
require('./../assets/styles/main.less')

ReactDOM.render((
  <HashRouter>
    <Switch>
      <Route path='/' exact component={Home} />
      <Route path='/apps/*/terms-privacy' component={AppStoreTermsPrivacy} />
      <Route path='/*' component={Page404} />
    </Switch>
  </HashRouter>
), document.getElementById('app'))
