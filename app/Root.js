//@flow
import React from 'react'
import { render } from 'react-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import injectTapEventPlugin from 'react-tap-event-plugin'
import { browserHistory, Router, Route, Redirect } from 'react-router'
import { Provider } from 'react-redux'

import Companies from '~/app/containers/pages/companies/Companies'
import NewCompany from '~/app/containers/pages/companies/NewCompany'
import Layout from '~/app/containers/pages/layout/Layout'
import store from '~/app/Store'
import { routes } from '~/app/config'
import './assets/styles/global.css'

// // Needed for onTouchTap
// // http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin()

render((
  <Provider store={store}>
    <MuiThemeProvider>
      <div style={{height: '100%'}}>
        <Router history={browserHistory}>
          <Redirect from='/' to='/companies' />
          <Route path='/' component={Layout}>
            <Router path={routes.companies.index} component={Companies} />
            <Router path={routes.companies.new} component={NewCompany} />
          </Route>
        </Router>
      </div>
    </MuiThemeProvider>
  </Provider>

), document.getElementById('root'))
