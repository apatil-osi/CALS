import React from 'react'
import _ from 'lodash'
import PropTypes from 'prop-types'
import {DropDownField} from 'components/common/dropDownField'
import {DateField} from '../../components/common/dateFields'
import {InputComponent} from 'components/common/inputFields'
import {ApplicantsFreeformRelationshipFields} from 'components/rfa_forms/applicantsFreeformRelationshipFields.jsx'
import {getDictionaryId, dictionaryNilSelect, dictionaryNilSelectValue, FormatDateForDisplay, FormatDateForPersistance, checkArrayObjectPresence} from 'helpers/commonHelper.jsx'
import {yesNo} from 'constants/constants'
import {setToWhomOptionList, handleToWhomValue, checkRelationshipFreeformPresence} from 'helpers/cardsHelper.jsx'
import Validator from 'helpers/validator'
import {fieldErrorsAsImmutableSet} from 'helpers/validationHelper.jsx'

const dateValidator = {rule: 'isValidDate', message: 'date is invalid'}

export class MinorCardField extends React.Component {
  constructor (props) {
    super(props)
    this.isRelationShipToApplicantObject = this.isRelationShipToApplicantObject.bind(this)
    this.onChange = this.onChange.bind(this)
    this.minorDOBId = this.props.idPrefix + 'date_of_birth'
    this.relationshipToApplicantID = this.props.idPrefix + 'relationship_to_applicants[0].relationship_to_applicant_freeform'
    this.genderID = this.props.idPrefix + 'gender'
    this.childFinanciallySupportedID = this.props.idPrefix + 'relationship_to_applicants[0].child_financially_supported'
    this.childAdoptedID = this.props.idPrefix + 'relationship_to_applicants[0].child_adopted'
    this.props.validator.addFieldValidation(this.minorDOBId, dateValidator)
    this.props.validator.addFieldValidation(this.minorDOBId,
      {rule: 'isRequiredIf',
        message: 'required',
        condition: () => this.isRelationShipToApplicantObject()})
    this.props.validator.addFieldValidation(this.relationshipToApplicantID,
      {rule: 'isRequiredIf',
        message: 'required',
        condition: () => this.isRelationShipToApplicantObject()})
    this.props.validator.addFieldValidation(this.genderID,
      {rule: 'isRequiredIf',
        message: 'required',
        condition: () => this.isRelationShipToApplicantObject()})
    this.props.validator.addFieldValidation(this.childFinanciallySupportedID,
      {rule: 'isRequiredBooleanIf',
        message: 'required',
        condition: () => this.isRelationShipToApplicantObject()})
    this.props.validator.addFieldValidation(this.childAdoptedID,
      {rule: 'isRequiredBooleanIf',
        message: 'required',
        condition: () => this.isRelationShipToApplicantObject()})
  }
  isRelationShipToApplicantObject () {
    // const val = this.props.minorChild.relationship_to_applicants[0].relationship_to_applicant_freeform
    // return !_.isEmpty(val)
    return true
  }

  componentWillUnmount () {
    const rulesToRemove = [this.minorDOBId, this.relationshipToApplicantID,
      this.ApplicantIdID, this.genderID, this.childFinanciallySupportedID, this.childAdoptedID]
    this.props.validator.removeValidations(rulesToRemove)
  }
  onChange (event, subIndex) {
    this.props.handleRelationshipTypeChange(this.props.index, dictionaryNilSelectValue(event.target.options), subIndex, 'child_financially_supported')
  }
  render () {
    const minor = this.props.minorChild
    const isRelationShipToApplicantObject = this.isRelationShipToApplicantObject()
    let applicants = this.props.applicants

    const relationshipLabel = applicants.length > 1 ?
    'Relationship to Applicants:' : 'Relationship to Applicant:'

    return (
      <form>
        <div className='col-md-12' >
          <div>
            <label>{relationshipLabel}</label>
          </div>
          {
          applicants && applicants.map((applicant, subIndex) => {
            return (
              <div key={'person[' + this.props.index + '].applicant[' + subIndex + ']'} >
                <InputComponent
                  gridClassName='col-md-4'
                  id={'relationship_to_applicant' + this.props.index + 'person' + subIndex + 'relationship_to_applicant_freeform'}
                  value={checkRelationshipFreeformPresence(minor, subIndex)}
                  label={applicant.first_name + ' ' + applicant.last_name}
                  placeholder=''
                  onChange={(event) => this.props.handleRelationshipTypeToApplicant(applicant, event.target.value, this.props.index, subIndex)} />
                <DropDownField gridClassName='col-md-4'
                  id='child_financially_supported'
                  value={minor.relationship_to_applicants[subIndex] && minor.relationship_to_applicants[subIndex].child_financially_supported}
                  selectClassName={'reusable-select'}
                  optionList={yesNo.items}
                  label={isRelationShipToApplicantObject ? 'Provides Financial Support? (required)' : 'Provides Financial Support?'}
                  onChange={(event) => this.onChange(event, subIndex)} />
                <DropDownField gridClassName='col-md-4'
                  id='child_adopted'
                  value={minor.relationship_to_applicants[subIndex] && minor.relationship_to_applicants[subIndex].child_adopted}
                  selectClassName={'reusable-select'}
                  optionList={yesNo.items}
                  label={isRelationShipToApplicantObject ? 'Is this child adopted? (required)' : 'Is this child adopted?'}
                  onChange={(event) => this.onChange(event, subIndex)} />
              </div>

            )
          })
        }
        </div>
        <div className='col-md-12' >
          <div>
            <label>{'Child Information:'}</label>
          </div>
          <div className='col-md-12'>
            <DateField gridClassName='col-md-3'
              id={this.props.idPrefix + 'date_of_birth'}
              label={isRelationShipToApplicantObject ? 'Date of Birth (required)' : 'Date of Birth'}
              value={FormatDateForDisplay(minor.date_of_birth)}
              errors={fieldErrorsAsImmutableSet(this.props.errors.date_of_birth)}
              onChange={(event) => this.props.onFieldChange(this.props.index,
            FormatDateForPersistance(event.target.value), 'date_of_birth')}
              onBlur={(event) => this.props.validator.validateFieldSetErrorState(this.minorDOBId, event.target.value)} />
            <DropDownField gridClassName='col-md-3'
              id='minor_gender'
              selectClassName='reusable-select'
              optionList={this.props.genderTypes}
              value={getDictionaryId(minor.gender)}
              label={isRelationShipToApplicantObject ? 'Gender (required)' : 'Gender'}
              onChange={(event) => this.props.onFieldChange(this.props.index, dictionaryNilSelect(event.target.options), 'gender')} />
          </div>
        </div>
      </form>
    )
  }
}

MinorCardField.propTypes = {
  index: PropTypes.number,
  minorChild: PropTypes.object.isRequired,
  applicants: PropTypes.array.isRequired,
  relationshipToApplicantTypes: PropTypes.array,
  genderTypes: PropTypes.array,
  handleRelationshipTypeToApplicant: PropTypes.func,
  onFieldChange: PropTypes.func
}

MinorCardField.defaultProps = {
  idPrefix: '',
  errors: {}
}
