import React from 'react'
import Immutable from 'immutable'
import CardsGroupLayout from 'components/common/cardsGroupLayout.js'

export default class TrackingList extends React.Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <CardsGroupLayout>
        <div>tracking page</div>
      </CardsGroupLayout>
    )
  }
}
