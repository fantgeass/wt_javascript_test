//@flow
import { connect } from 'react-redux'
import { createAction } from 'redux-actions'

import NewCompany from '~/app/components/pages/companies/NewCompany'
import { SAGA_CREATE_COMPANY } from '~/app/reducers/Company'

export const mapStateToProps = (_state: Object): Object => ({

})

export const mapDispatchToProps = (dispatch: Function): Object => ({
  createCompany: (values) => dispatch(createAction(SAGA_CREATE_COMPANY)({company: values}))
})

export default connect(mapStateToProps, mapDispatchToProps)(NewCompany)
