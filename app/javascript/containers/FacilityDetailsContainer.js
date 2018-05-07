import {connect} from 'react-redux'
import FacilityDetails from 'facility/facilityDetails'

const mapStateToProps = (state) => ({
  facilityData: state.facilityReducer.facility
})

export default connect(mapStateToProps)(FacilityDetails)
