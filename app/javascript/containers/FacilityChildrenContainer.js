import {connect} from 'react-redux'
import FacilityChildren from 'facility/facilityChildren'

const mapStateToProps = (state) => ({
  children: state.facilityReducer.children.children
})

export default connect(mapStateToProps)(FacilityChildren)
