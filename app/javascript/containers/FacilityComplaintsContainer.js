import {connect} from 'react-redux'
import FacilityComplaints from 'facility/facilityComplaints'

const mapStateToProps = (state) => ({
  complaints: state.facilityReducer.complaints.complaints
})

export default connect(mapStateToProps)(FacilityComplaints)
