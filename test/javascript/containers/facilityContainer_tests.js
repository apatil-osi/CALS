import FacilityContainer from 'containers/FacilityContainer'
import React from 'react'
import {createMockStore} from 'redux-test-utils'
import {shallow} from 'enzyme'

describe('FacilityContainer', () => {
  const state = {
    'facilityReducer': {'facility': {
      'href': 'facilities/SouUlov56F',
      'id': 'SouUlov56F',
      'type': {
        'id': '432',
        'value': 'Foster Family Agency Certified Home'
      },
      'name': 'Adriana Marin',
      'licensee_name': '',
      'capacity': 2,
      'county': {
        'id': '56',
        'value': 'Ventura'
      },
      'phones': [ {
        'relation': 'primary',
        'number': '8056506814'
      }, {
        'relation': 'alternate',
        'number': '8056506814'
      } ],
      'addresses': [ {
        'type': 'Residential',
        'address': {
          'street_address': '1266 Chalmette Ave',
          'city': 'Ventura',
          'state': 'CA',
          'zip_code': '93003'
        }
      }, {
        'type': 'Mailing',
        'address': {
          'street_address': '333 Gellert Blvd., #203',
          'city': 'Daly City',
          'state': 'CA',
          'zip_code': '94015'
        }
      } ],
      'facility_source': 'CWS/CMS'
    },
    'children': {
      'children': [{
        'id': 4,
        'person': {'first_name': 'john'}
      }]
    },
    'complaints': {
      'complaints': [{
        'id': 5,
        'complaint_date': '2016-02-02',
        'assigned_worker': 'James'
      }]
    },
    'match': {
      'params': {
        'id': 'SouUlov56F'
      }
    }
    }
  }
  const store = createMockStore(state)
  let component
  beforeEach(() => {
    const context = {store}
    component = shallow(<facilityContainer />, {context}, {disableLifecycleMethods: true})
  })
  it('renders Facility', () => {
    expect(component.length).toEqual(1)
  })
})
