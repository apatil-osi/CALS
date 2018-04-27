import React from 'react'
import _ from 'lodash'
import {InputComponent} from './inputFields'
import {DropDownField} from './dropDownField'
import {DateField} from './dateFields'
import CompleteNameFields from 'rfa_forms/rfa01a_edit_view/completeNameField.jsx'
import {ApplicantsFreeformRelationshipFields} from 'components/rfa_forms/applicantsFreeformRelationshipFields.jsx'
import {valuePresent, dictionaryNilSelect, dictionaryNilSelectValue, getDictionaryId, FormatDateForDisplay, FormatDateForPersistance} from 'helpers/commonHelper.jsx'
import {setToWhomOptionList, handleToWhomValue, checkRelationshipFreeformPresence} from 'helpers/cardsHelper.jsx'
import Validator from 'helpers/validator'
import {fieldErrorsAsImmutableSet} from 'helpers/validationHelper.jsx'

const dateValidator = {rule: 'isValidDate', message: 'date is invalid'}

export class OtherAdultsCardField extends React.Component {
  constructor (props) {
    super(props)
    this.isRelationshipToApplicantObject = this.isRelationshipToApplicantObject.bind(this)
    this.otherAdultDOBId = this.props.idPrefix + 'date_of_birth'
    this.props.validator.addFieldValidation(this.otherAdultDOBId, dateValidator)

    this.relationshipToApplicantID = this.props.idPrefix + 'relationship_to_applicants[0].relationship_to_applicant_freeform'
    this.ApplicantIdID = this.props.idPrefix + 'relationship_to_applicants[0].applicant_id'
    this.otherAdultFirstNameID = this.props.idPrefix + 'first_name'
    this.otherAdultMiddleNameID = this.props.idPrefix + 'middle_name'
    this.otherAdultLastNameID = this.props.idPrefix + 'last_name'

    this.props.validator.addFieldValidation(
      this.otherAdultDOBId,
      {rule: 'isRequiredIf',
        message: 'required',
        condition: () => this.isRelationshipToApplicantObject()})
    this.props.validator.addFieldValidation(
      this.ApplicantIdID,
      {rule: 'isRequiredNumberIf',
        message: 'required',
        condition: () => this.isRelationshipToApplicantObject()})
    this.props.validator.addFieldValidation(
      this.otherAdultFirstNameID,
      {rule: 'isRequiredIf',
        message: 'required',
        condition: () => this.isRelationshipToApplicantObject()})
    this.props.validator.addFieldValidation(
      this.otherAdultLastNameID,
      {rule: 'isRequiredIf',
        message: 'required',
        condition: () => this.isRelationshipToApplicantObject()})
  }

  isRelationshipToApplicantObject () {
    const val = this.props.otherAdults.relationship_to_applicants[0].relationship_to_applicant_freeform
    return !_.isEmpty(val)
  }

  componentWillUnmount () {
    const rulesToRemove = [ this.otherAdultDOBId, this.relationshipToApplicantID, this.ApplicantIdID,
      this.otherAdultFirstNameID, this.otherAdultMiddleNameID, this.otherAdultLastNameID]
    this.props.validator.removeValidations(rulesToRemove)
  }

  render () {
    const adult = this.props.otherAdults
    const isRelationshipToApplicantObject = this.isRelationshipToApplicantObject()
    return (
      <form>

        <ApplicantsFreeformRelationshipFields
          applicants={this.props.applicants}
          person={adult}
          index={this.props.index}
          idPrefix='otherAdults'
          handleRelationshipTypeToApplicant={this.props.handleRelationshipTypeToApplicant} />

        <div className='col-md-12' style={{borderTop: '0.1rem solid #e8e8e8', padding: '0em',
          paddingLeft: '1%', margin: '1em 0em', marginLeft: '0em'}} >
          <DateField gridClassName='col-md-4'
            id={this.otherAdultDOBId}
            label={isRelationshipToApplicantObject ? 'Date of Birth (required)' : 'Date of Birth'}
            value={FormatDateForDisplay(adult.date_of_birth)}
            errors={fieldErrorsAsImmutableSet(this.props.errors.date_of_birth)}
            onChange={(event) => this.props.onFieldChange(this.props.index,
            FormatDateForPersistance(event.target.value), 'date_of_birth')}
            onBlur={(event) => this.props.validator.validateFieldSetErrorState(this.otherAdultDOBId, event.target.value)} />
        </div>
        <div className='col-md-12'>
          <DropDownField gridClassName='col-md-4'
            id={this.props.idPrefix + 'name_prefix'}
            value={getDictionaryId(adult.name_prefix)}
            selectClassName={'reusable-select'}
            optionList={this.props.prefixTypes}
            label={'Prefix'}
            onChange={(event, id) => this.props.onFieldChange(this.props.index, dictionaryNilSelect(event.target.options), 'name_prefix')} />
        </div>
        <div className='col-md-12'>
          <InputComponent gridClassName='col-md-4'
            id={this.otherAdultFirstNameID}
            value={adult.first_name}
            label={isRelationshipToApplicantObject ? 'First Name (required)' : 'First Name'}
            placeholder='Enter First Name'
            type='text'
            onChange={(event, id) => this.props.onFieldChange(this.props.index, event.target.value, ('first_name'))} />
          <InputComponent gridClassName='col-md-4'
            id={this.otherAdultMiddleNameID}
            value={adult.middle_name}
            label='Middle Name'
            placeholder='Enter Middle Name'
            type='text'
            onChange={(event, id) => this.props.onFieldChange(this.props.index, event.target.value, ('middle_name'))} />
          <InputComponent gridClassName='col-md-4'
            id={this.otherAdultLastNameID}
            value={adult.last_name}
            label={isRelationshipToApplicantObject ? 'Last Name (required)' : 'Last Name'}
            placeholder='Enter Last Name'
            type='text'
            onChange={(event, id) => this.props.onFieldChange(this.props.index, event.target.value, ('last_name'))} />
        </div>
        <div className='col-md-12'>
          <DropDownField
            gridClassName='col-md-4'
            id={this.props.idPrefix + 'name_suffix'}
            value={getDictionaryId(adult.name_suffix)}
            selectClassName={'reusable-select'}
            optionList={this.props.suffixTypes}
            label={'Suffix'}
            onChange={(event, id) => this.props.onFieldChange(this.props.index, dictionaryNilSelect(event.target.options), 'name_suffix')} />
        </div>

      </form>
    )
  }
}

OtherAdultsCardField.defaultProps = {
  idPrefix: '',
  errors: {}
}
