import React from 'react'
import Validator from 'helpers/validator'
import {shallow, mount} from 'enzyme'
import Immutable from 'immutable'

fdescribe('Validator Object', () => {
	let validator
	beforeEach(() => {
		validator = new Validator({})
	})
	it('validate objects', () => {
		expect(validator.errors).toEqual(Object({  }))
		expect(validator.rules).not.toEqual(Object({  }))
		expect(validator.validations).toBe(Immutable.Map())
	})
	it('validate ', () => {
		const opt = {
			value: '212-221-5000',
			condition: jasmine.createSpy().and.returnValue(true)
		}
		expect(validator.rules.isRequiredNumberIf(opt)).toEqual(true)
		opt.value = {}
		expect(validator.rules.isRequiredNumberIf(opt)).toEqual(false)
	})
})