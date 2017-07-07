import React from 'react'
import OtherAdults from './other_adults_card'

export default class OtherAdultsCards extends React.Component {
  constructor (props) {
    super(...arguments)
    this.state = {
      isFocused: {}
    }
  }
  toggleOnFocus (name, event) {
    let focused = this.state.isFocused
    focused = {}
    let focusedCard = focused[name] == 'focused' ? 'show' : 'edit'
    focused[name] = focusedCard
    this.setState({
      isFocused: focused
    })
  }
  render () {
    const {formData} = this.state
    return (

      <div className='other_adults_cards'>

        PROBLEM IS HERE with the div ID not  being makde

        <div id='OtherAdults' onClick={this.toggleOnFocus.bind(this, 'OtherAdults')} className={(this.state.isFocused['OtherAdults']) + ' ' + 'card other-adults-section double-gap-top'}>
          <div className='card-header'>
            <span>Other adults residing or Regularly present in the home</span>
          </div>
          <OtherAdults {...this.props} />
        </div>
      </div>
    )
  }
}
