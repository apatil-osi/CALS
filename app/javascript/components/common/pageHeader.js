import React from 'react'
import PropTypes from 'prop-types'
import Button from 'components/common/button'
import rfa01PageHeaderbuttons from 'components/common/rfa01PageHeaderButtons'
import Affix from 'react-overlays/lib/AutoAffix'

const PageHeader = ({
  headerLabel,
  pageSubHeader,
  pageHeaderButtons
}) => (
  <div className='page-header-container'>
    <Affix affixStyle={{zIndex: 100}}>
      <div className='page-header-mast'>
        <div className='container'>
          <div className='row'>
            <div className='col-xs-7'>
              <div className='page-title text-left'>
                {headerLabel}
              </div>
              <div className='page-title text-left name-field'>
                {pageSubHeader}
              </div>
            </div>
            {pageHeaderButtons}
          </div>
        </div>
      </div>
    </Affix>
  </div>
)

PageHeader.propTypes = {
  headerLabel: PropTypes.string,
  buttonId: PropTypes.string,
  buttonTextAlignment: PropTypes.string,
  onButtonClick: PropTypes.func
}

PageHeader.defaultProps = {
  headerLabel: 'To implement',
  rfa01PageHeaderButtons: '',
  buttonTextAlignment: 'center',
  disableSave: false,
  disableSubmit: false
}

export default PageHeader
