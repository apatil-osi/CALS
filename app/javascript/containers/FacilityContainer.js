import {connect} from 'react-redux'
import Facility from 'facility/index'
import {facilityApiCall} from 'actions/facilityActions'

function mapStateToProps (state) {
  return {
    facility: state.facilityReducer.facility,
    children: state.facilityReducer.children,
    complaints: state.facilityReducer.complaints,
    errors: state.facilityReducer.errors
  }
}

export default connect(mapStateToProps, {facilityApiCall})(Facility)
