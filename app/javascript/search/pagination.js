import React from 'react'
import PropTypes from 'prop-types'
import {resultsPerPage} from './common/commonUtils'
import Cleave from 'cleave.js/react'
import {dictionaryNilSelectValue, floatToNextInt, getFromValue} from 'helpers/commonHelper.jsx'

const Pagination = ({
  searchApiCall,
  sizeValue,
  pageNumber,
  totalNoOfFacilities,
  handleDropDownAndPageNumberChange,
  handlePageNumberChange,
  onPageNumberInputChange
}) => (
  <span className='pagination'>
    <select
      className='number_of_facilities'
      id='numberOfFacilities'
      value={sizeValue}
      onChange={(event) => { handleDropDownAndPageNumberChange(1, parseInt(dictionaryNilSelectValue(event.target.options))); searchApiCall(getFromValue(sizeValue, 1), parseInt(dictionaryNilSelectValue(event.target.options))) }}>
      {resultsPerPage.map((noOfResults) =>
        <option key={noOfResults} value={noOfResults}>{noOfResults}</option>
      )}
    </select>
    <button
      disabled={getFromValue(sizeValue, pageNumber) - sizeValue < 0}
      onClick={() => { handlePageNumberChange(pageNumber - 1); searchApiCall(getFromValue(sizeValue, pageNumber - 1), sizeValue); window.scrollTo(0, 0) }}
      className='previous btn btn-default'>
      <p>&#8249;</p>
    </button>
    <Cleave
      className='page_number'
      type='text'
      value={pageNumber}
      options={{blocks: [5], numericOnly: true}}
      placeholder='Page #'
      onChange={(event) => { handlePageNumberChange(event.target.value) }}
      onKeyDown={(event) => { if (event.which === 9 || event.which === 13) { onPageNumberInputChange(event.target.value); window.scrollTo(0, 0) } } }/>
    <span>of</span>
    <span className='noOfPages'>{floatToNextInt(totalNoOfFacilities, sizeValue)}</span>
    <button
      disabled={getFromValue(sizeValue, pageNumber) + sizeValue >= totalNoOfFacilities}
      onClick={() => { handlePageNumberChange(pageNumber + 1); searchApiCall(getFromValue(sizeValue, pageNumber + 1), sizeValue); window.scrollTo(0, 0) }}
      className='next btn btn-default'>
      <p>&#8250;</p>
    </button>
  </span>
)

Pagination.propTypes = {
  totalNoOfFacilities: PropTypes.number,
  sizeValue: PropTypes.number,
  pageNumber: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  searchApiCall: PropTypes.func,
  onPageNumberInputChange: PropTypes.func,
  handleDropDownAndPageNumberChange: PropTypes.func,
  handlePageNumberChange: PropTypes.func
}
Pagination.defaultProps = {
  totalNoOfFacilities: 0,
  pageNumber: 1,
  sizeValue: 10
}

export default Pagination
