import React, { Component } from 'react'
import PropTypes from 'prop-types'
import FacilityDetailsContainer from 'containers/FacilityDetailsContainer'
import FacilityAddressContainer from 'containers/FacilityAddressContainer'
import FacilityChildrenContainer from 'containers/FacilityChildrenContainer'
import FacilityComplaintsContainer from 'containers/FacilityComplaintsContainer'
import {PageHeader} from 'react-wood-duck'
import Button from 'components/common/button'
import {fetchRequest} from '../helpers/http'
import {urlPrefixHelper} from 'helpers/url_prefix_helper.js.erb'
import BreadCrumb from 'components/common/breadCrumb'
import {connect} from 'react-redux'
import {facilityApiCall} from 'actions/facilityActions'
import ApiErrorMessages from 'components/common/errors/apiErrorMessages'
import {checkUndefinedOrErrorMessage, checkUndefinedOrErrorUrl, checkNameorNA} from 'search/common/commonUtils'
import {Link} from 'react-router-dom'
// import './stylesheets/facility.scss'

class Facility extends React.Component {
  componentDidMount () {
    const params = {
      'id': this.props.match.params.id
    }
    this.props.facilityApiCall(params)
  }

  render () {
    const facilityData = this.props.facility
    const facilityChildren = this.props.children
    const facilityComplaints = this.props.complaints
    const errors = this.props.errors
    return (
      <div className='main_page'>
        <PageHeader
          pageTitle={checkNameorNA(facilityData)}
          button={null}
        />
        <BreadCrumb
          navigationElements={[<Link to={urlPrefixHelper('/search')}>Facility Search</Link>]}
        />
        <div className='header_cwds col-xs-12 col-sm-12 col-md-12 col-lg-12'>
          <div className='header-logo' />
        </div>
        <div className='body_cwds col-xs-12 col-sm-12 col-md-12 col-lg-12'>
          <ApiErrorMessages errors={checkUndefinedOrErrorMessage(errors)} url={checkUndefinedOrErrorUrl(errors)} />

          {facilityData && (
            <div>
              <FacilityDetailsContainer />
              <FacilityAddressContainer />
            </div>
          )}

          {facilityChildren && <FacilityChildrenContainer />}
          {facilityComplaints && <FacilityComplaintsContainer />}
        </div>
      </div>
    )
  }
}

Facility.propTypes = {
  facility: PropTypes.object,
  children: PropTypes.object,
  complaints: PropTypes.object,
  match: PropTypes.object,
  errors: PropTypes.object,
  facilityApiCall: PropTypes.func
}

export default Facility
