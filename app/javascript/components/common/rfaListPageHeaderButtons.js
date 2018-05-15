import PropTypes from 'prop-types'
import React from 'react'
import Button from 'components/common/button'

const RfaListPageHeaderButtons = ({
  disbaleRfaApplication,
  submit,
  checkForPriviliges,
  submitForSearch
}) => {
  return (
    <div className='col-xs-5'>
      {
        !disbaleRfaApplication
          ? <div className='col-xs-8'>
            <Button
              onClick={submit}
              label='Create RFA Application'
            />
          </div> : null
      }
      {
        checkForPriviliges
          ? <div className='col-xs-4'>
            <Button
              onClick={submitForSearch}
              label='Search for Facilities'
            />
          </div> : null
      }
    </div>

  )
}

export default RfaListPageHeaderButtons
