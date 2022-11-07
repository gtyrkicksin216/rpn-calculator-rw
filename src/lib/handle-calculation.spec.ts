import { handleOperation } from './handle-calculation'

describe('Ensures operations are pure', () => {
	it('Adds values', () => {
		expect(handleOperation(5, 8, '+')).toEqual(13)
	})

	it('Subtracts values', () => {
		expect(handleOperation(24, 8, '-')).toEqual(16)
	})

	it('Divides values', () => {
		expect(handleOperation(25, 5, '/')).toEqual(5)
	})

	it('Multiplies values', () => {
		expect(handleOperation(4, 4, '*')).toEqual(16)
	})
})
