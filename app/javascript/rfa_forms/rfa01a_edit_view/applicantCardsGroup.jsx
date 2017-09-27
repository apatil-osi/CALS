import Immutable from 'immutable'
import React from 'react'
import PropTypes from 'prop-types'
import ApplicantCard from './applicantCard.jsx'
import {checkArrayObjectPresence} from 'helpers/commonHelper.jsx'

const blankApplicantFields = Object.freeze({
  first_name: '',
  middle_name: '',
  last_name: '',
  other_names: [],
  date_of_birth: '',
  driver_license_number: '',
  email: ''
})

export default class ApplicantCardsGroup extends React.Component {
  constructor (props) {
    super(props)
    this.addCard = this.addCard.bind(this)
    this.onApplicantClickClose = this.onApplicantClickClose.bind(this)

    this.setApplicantsState = this.setApplicantsState.bind(this)
  }

  onApplicantClickClose (applicantCardIndex) {
    let applicantsList = Immutable.fromJS(this.props.applicants)

    applicantsList = applicantsList.delete(applicantCardIndex)

    // convert to regular js array
    this.props.setParentState('applicants', applicantsList.toJS())
  }

  addCard (event) {
    let applicantsList = checkArrayObjectPresence(this.props.applicants) || [blankApplicantFields]
    applicantsList.push(blankApplicantFields)

    this.props.setParentState('applicants', applicantsList)
  }

  setApplicantsState (applicantIndex, data) {
    let applicantsList = Immutable.fromJS(checkArrayObjectPresence(this.props.applicants) || [blankApplicantFields])
    applicantsList = applicantsList.update(applicantIndex, val => data)
    this.props.setParentState('applicants', applicantsList.toJS())
  }

  render () {
    let applicantsList = checkArrayObjectPresence(this.props.applicants) || [blankApplicantFields]

    return (
      <div>
        <div className='cards-section col-xs-12 col-sm-12 col-md-12 col-lg-12'>
          {
            applicantsList.map((applicantFields, index) => {
              return (
                <div key={index}>
                  <h3>I. Applicant {String(index + 1)} - <span>Information</span></h3>
                  {(index > 0) && <span onClick={() => this.onApplicantClickClose(index)} className='pull-right glyphicon glyphicon-remove' />}
                  <ApplicantCard
                    index={index}
                    nameTypes={this.props.nameTypes}
                    prefixTypes={this.props.prefixTypes}
                    suffixTypes={this.props.suffixTypes}
                    phoneTypes={this.props.phoneTypes}
                    salaryTypes={this.props.salaryTypes}
                    stateTypes={this.props.stateTypes}
                    educationLevels={this.props.educationLevels}
                    genderTypes={this.props.genderTypes}
                    // raceTypes={this.props.raceTypes}
                    ethnicityTypes={this.props.ethnicityTypes}
                    languageTypes={this.props.languageTypes}
                    focusComponentName={this.props.focusComponentName}
                    applicantFields={applicantFields}
                    setParentState={this.setApplicantsState}
                    setFocusState={this.props.setFocusState}
                    getFocusClassName={this.props.getFocusClassName}
                    validator={this.props.validator}
                    hasValidName={this.props.hasValidName}
                    errors={this.props.errors[index]}
                  />
                </div>
              )
            })
          }
        </div>
        <div className='add-another col-xs-12 col-sm-12 col-md-12 col-lg-12'>
          <div className='text-center'>
            <button onClick={this.addCard} className='btn btn-default'>Add Another Applicant +</button>
          </div>
        </div>
      </div>
    )
  }
}

ApplicantCardsGroup.propTypes = {
  phoneTypes: PropTypes.array.isRequired,
  salaryTypes: PropTypes.array.isRequired,
  stateTypes: PropTypes.array.isRequired,
  educationLevels: PropTypes.array.isRequired,
  genderTypes: PropTypes.array.isRequired,
  ethnicityTypes: PropTypes.array.isRequired,
  languageTypes: PropTypes.array.isRequired,
  focusComponentName: PropTypes.string,
  applicantFields: PropTypes.object,
  setParentState: PropTypes.func.isRequired,
  setFocusState: PropTypes.func,
  validator: PropTypes.object,
  errors: PropTypes.array
}

ApplicantCardsGroup.defaultProps = {
  phones: [blankApplicantFields],
  errors: []
}
