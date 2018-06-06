import React from 'react'
import TrackingList from 'rfa_forms/tracking'
import {shallow, mount} from 'enzyme'

describe('Rfa01CEditView test', () => {
  let trackingListView

  beforeEach(() => {
    const props = {
      user: {county_code: 1},
      tracking: {},
      rfa_a01_application: {
        'id': 744,
        application_county: {
          value: 'Los Angeles',
          'id': 19
        },
        'residence': {
          'addresses': [
            {
              'street_address': '4220 Ardwell Way',
              'zip': '95823',
              'city': 'Sacramento',
              'state': {
                'value': 'California',
                'id': 'CA'
              },
              'type': {
                'value': 'Residential',
                'id': 1
              }
            },
            {
              'street_address': '',
              'zip': '',
              'city': '',
              'type': {
                'value': 'Mailing',
                'id': 3
              }
            }
          ],
          'physical_mailing_similar': true,
          'residence_ownership': {
            'value': 'Own',
            'id': 1
          },
          'weapon_in_home': true,
          'body_of_water_exist': false,
          'body_of_water_description': '',
          'others_using_residence_as_mailing': false,
          'directions_to_home': '',
          'home_languages': [
            {
              'value': 'American Sign Language',
              'id': 1
            }
          ]
        },
        'applicants': [
          {
            'id': 396,
            'first_name': 'lkj',
            'middle_name': '',
            'last_name': 'lj',
            'other_names': [],
            'date_of_birth': '1111-11-11',
            'driver_license_number': '',
            'email': '',
            'phones': [
              {
                'phone_type': {
                  'value': 'Home',
                  'id': 2
                },
                'number': '1111111111',
                'preferred': false
              }
            ]
          }
        ],
        'child_desired': {
          'child_identified': true,
          'child_in_home': false,
          'preferred_ages': []
        },
        'is_initial_application': false,
        metadata: {submit_enabled: true}
      }
    }

    trackingListView = mount(<TrackingList {...props} />)
  })

  it('tests tracking List View renders page', () => {
    expect(trackingListView.length).toEqual(1)
  })
})
