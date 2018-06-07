import React from 'react'
import PropTypes from 'prop-types'

const AdvanceSearch = ({
  paginationRender,
  handleToggle,
  isToggled
}) => (
  <span>
    <span className='search_details col-xs-12 col-sm-11 col-md-11 col-lg-11'>
      <p>Search Results:</p>
      {paginationRender}
    </span>
    <span className='toggle_result col-xs-12 col-sm-1 col-md-1 col-lg-1'>
      <span id='toggle_button' onClick={handleToggle} className={(isToggled ? 'line_off-icon' : 'line_on-icon') + ' ' + 'navbar-brand'} alt={'list'} />
      <span onClick={handleToggle} className={(isToggled ? 'grid_on-icon' : 'grid_off-icon') + ' ' + 'navbar-brand'} alt={'grid'} />
    </span>
  </span>
)

AdvanceSearch.propTypes = {
  paginationRender: PropTypes.element,
  handleToggle: PropTypes.func,
  isToggled: PropTypes.bool
}

AdvanceSearch.defaultProps = {
  isToggled: true
}

export default AdvanceSearch
