import React from 'react'
import PropTypes from 'prop-types'
import {InputComponent} from 'components/common/inputFields'
import {checkRelationshipFreeformPresence} from 'helpers/cardsHelper.jsx'

const ApplicantsFreeformRelationshipFields = ({
applicants,
person,
index,
idPrefix,
handleRelationshipTypeToApplicant
}) => {
  const relationshipLabel = applicants.length > 1 ?
  'Relationship to Applicants:' : 'Relationship to Applicant:'
  return (
    <div className='col-md-12' >
      <div>
        <label>{relationshipLabel}</label>
      </div>
      {

      applicants && applicants.map((applicant, subIndex) => {
        return (
          <div key={'person[' + index + '].applicant[' + subIndex + ']'} >
            <InputComponent
              gridClassName='col-md-4'
              id={idPrefix + 'relationship_to_applicants' + index + 'person' + subIndex + 'relationship_to_applicant_freeform'}
              value={checkRelationshipFreeformPresence(person, index)}
              label={applicant.first_name + ' ' + applicant.last_name}
              placeholder=''
              onChange={(event) => handleRelationshipTypeToApplicant(applicant, event.target.value, index, subIndex)} />

          </div>
        )
      })
    }
    </div>
  )
}
ApplicantsFreeformRelationshipFields.propTypes = {
  index: PropTypes.number,
  applicants: PropTypes.array,
  person: PropTypes.object,
  handleRelationshipChange: PropTypes.func
}

ApplicantsFreeformRelationshipFields.defaultProps = {
  index: 0,
  applicants: []
}

export {ApplicantsFreeformRelationshipFields}
