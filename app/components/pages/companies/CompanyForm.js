//@flow
import React, { PropTypes as pt } from 'react'
import { Field, reduxForm } from 'redux-form'
import { RaisedButton } from 'material-ui'
import { TextField } from 'redux-form-material-ui'

const validate = (values: Object) => {
  const errors = {}

  if (!values.name) {
    errors.name = 'Required'
  } else if (values.name.length < 3) {
    errors.name = 'Must be at least 3 characters'
  }

  return errors
}

const CompanyForm = React.createClass({
  propTypes: {
    handleSubmit: pt.func.isRequired
  },

  render() {
    const { handleSubmit } = this.props

    return <form onSubmit={handleSubmit}>
      <div>
        <Field name='name' component={TextField} hintText='Name' />
      </div>
      <RaisedButton label='Submit' onClick={handleSubmit} />
    </form>
  }
})


export default reduxForm({
  form: 'companyForm',
  validate
})(CompanyForm)
