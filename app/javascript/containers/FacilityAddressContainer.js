import {connect} from 'react-redux'
import FacilityAddress from 'facility/facilityAddress'

const mapStateToProps = (state) => ({
  facilityData: state.facilityReducer.facility
})

export default connect(mapStateToProps)(FacilityAddress)
