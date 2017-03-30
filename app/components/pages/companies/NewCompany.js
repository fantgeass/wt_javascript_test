//@flow
import React, { PropTypes as pt } from 'react'

import { Container, Header } from './CompaniesStyle'
import CompanyForm from './CompanyForm'


const NewCompany = React.createClass({
  propTypes: {
    createCompany: pt.func.isRequired
  },

  render() {
    const { createCompany } = this.props

    return <Container>
      <Header>New Company</Header>
      <CompanyForm onSubmit={createCompany} />
    </Container>
  }
})

export default NewCompany
