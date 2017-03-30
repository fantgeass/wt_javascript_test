//@flow
import React, { PropTypes as pt } from 'react'
import { FlatButton } from 'material-ui'
import { Link } from 'react-router'

import { routes } from '~/app/config'

const Layout = React.createClass({
  propTypes: {
    children: pt.element.isRequired
  },

  render() {
    return <div>
      <Link to={routes.companies.index}><FlatButton label='Companies' /></Link>
      <Link to={routes.companies.new}><FlatButton label='New Company' /></Link>
      {this.props.children}
    </div>
  }
})

export default Layout
