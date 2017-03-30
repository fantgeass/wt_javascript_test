//@flow
import React, { PropTypes as pt } from 'react'
import { RaisedButton, Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui'
import Pagination from 'material-ui-pagination'

import { Container, Header } from './CompaniesStyle'


const Companies = React.createClass({
  propTypes: {
    getCompanies: pt.func.isRequired,
    generateCompanies: pt.func.isRequired,
    companies: pt.arrayOf(pt.object).isRequired,
    pagination: pt.shape({
      total: pt.number.isRequired,
      display: pt.number.isRequired,
      current: pt.number.isRequired
    }).isRequired
  },

  componentDidMount() {
    this.props.getCompanies()
  },

  setPage(page: number) {
    this.props.getCompanies(page)
  },

  render() {
    const { companies, pagination, generateCompanies } = this.props

    return <Container>
      <Header>Companies</Header>
      <RaisedButton label='Generate Companies' onClick={generateCompanies} primary />
      <Table selectable={false}>
        <TableHeader>
          <TableRow>
            <TableHeaderColumn>ID</TableHeaderColumn>
            <TableHeaderColumn>Name</TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody>
          {companies.map(c =>
            <TableRow key={c.id}>
              <TableRowColumn>{c.id}</TableRowColumn>
              <TableRowColumn>{c.name}</TableRowColumn>
            </TableRow>
          )}
        </TableBody>
      </Table>
      <Pagination {...pagination} onChange={this.setPage} />
    </Container>
  }
})

export default Companies
